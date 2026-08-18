// Express framework for creating the router and handling HTTP requests.
const express = require('express');
// Zod is used to validate request body payloads before processing them.
const { z } = require('zod');

// Environment variables like cookie name, JWT settings, and app config.
const env = require('../config/env');
// Wraps async route handlers so errors are passed to Express error middleware.
const asyncHandler = require('../utils/asyncHandler');
// Custom API error class used for consistent HTTP error responses.
const ApiError = require('../utils/ApiError');
// JWT helper functions for creating signed tokens and cookie settings.
const { signToken, cookieOptions } = require('../utils/jwt');
// Middleware that validates request bodies using Zod schemas.
const { validate } = require('../middleware/validate');
// Authentication middleware to protect routes requiring login.
const { requireAuth } = require('../middleware/auth');
// Rate limiter to prevent excessive auth attempts from the same client.
const { authLimiter } = require('../middleware/rateLimit');
// User model for database operations such as create, find, password hashing, and compare.
const User = require('../models/User');

// Create an Express router instance for all auth-related API endpoints.
const router = express.Router();

// Validation schema for registering a new user.
// It ensures name is non-empty and within limits, email is valid, and password is strong enough.
const registerSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(128),
});

// Validation schema for login.
// Email must be valid and password cannot be empty.
const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1).max(128),
});

// Validation schema for updating user profile name.
const profileSchema = z.object({
  name: z.string().trim().min(1).max(80),
});

// Validation schema for changing password.
// Requires current password and a valid new password.
const passwordSchema = z.object({
  currentPassword: z.string().min(1).max(128),
  newPassword: z.string().min(8).max(128),
});

// Helper function to create and set an auth cookie for the logged-in user.
// It signs a JWT containing the user's ID and stores it in a cookie.
function issueSession(res, user) {
  // Create a signed JWT that identifies the current user.
  const token = signToken({ sub: user._id.toString() });
  // Send the token to the client as an HTTP-only cookie for session management.
  res.cookie(env.cookieName, token, cookieOptions);
}

// POST /api/auth/register
// Creates a new account and immediately logs the user in.
router.post(
  '/register',
  // Rate limit repeated registration attempts to prevent abuse.
  authLimiter,
  // Validate request body before processing.
  validate(registerSchema),
  asyncHandler(async (req, res) => {
    // Extract data from request body.
    const { name, email, password } = req.body;

    // Check whether a user with this email already exists.
    const existing = await User.findOne({ email });
    if (existing) {
      // If found, reject registration with a conflict error.
      throw ApiError.conflict('Email already registered');
    }

    // Hash the provided password before saving it to the database.
    const passwordHash = await User.hashPassword(password);
    // Create the new user record in MongoDB.
    const user = await User.create({ name, email, passwordHash });

    // Set the session cookie so the user is logged in immediately.
    issueSession(res, user);
    // Return the created user in the response.
    res.status(201).json({ user });
  }),
);

// POST /api/auth/login
// Authenticates a user using their email and password.
router.post(
  '/login',
  // Prevent brute-force login attempts by limiting requests.
  authLimiter,
  // Validate login payload before checking credentials.
  validate(loginSchema),
  asyncHandler(async (req, res) => {
    // Read submitted login credentials.
    const { email, password } = req.body;

    // Search the database by email and include the password hash field for comparison.
    const user = await User.findOne({ email }).select('+passwordHash');

    // If no user is found, reject the login.
    if (!user) {
      throw ApiError.unauthorized('Invalid credentials');
    }

    // Compare the submitted plaintext password with the stored hash.
    const ok = await user.comparePassword(password);

    // If the password does not match, reject the login.
    if (!ok) {
      throw ApiError.unauthorized('Invalid credentials');
    }

    // Generate a new cookie-based session for this user.
    issueSession(res, user);
    // Send user back as logged-in response.
    res.json({ user });
  }),
);

// POST /api/auth/logout
// Clears the auth cookie so the client is logged out.
router.post('/logout', (req, res) => {
  // Remove the authentication cookie and expire it immediately.
  res.clearCookie(env.cookieName, { ...cookieOptions, maxAge: 0 });
  // Respond successfully.
  res.json({ ok: true });
});

// GET /api/auth/me
// Returns the currently authenticated user's profile.
router.get(
  '/me',
  // Require an active login before allowing access.
  requireAuth,
  asyncHandler(async (req, res) => {
    // req.user is attached by the auth middleware after token verification.
    res.json({ user: req.user });
  }),
);

// PATCH /api/auth/profile
// Updates the logged-in user's display name.
router.patch(
  '/profile',
  // User must be logged in to change profile information.
  requireAuth,
  // Validate the new profile name input.
  validate(profileSchema),
  asyncHandler(async (req, res) => {
    // Update the user's name in memory.
    req.user.name = req.body.name;
    // Save the update to the database.
    await req.user.save();

    // Return the updated user document.
    res.json({ user: req.user });
  }),
);

// PATCH /api/auth/password
// Changes the current user's password after verifying the existing one.
router.patch(
  '/password',
  // Rate limit password change attempts.
  authLimiter,
  // Require authentication to ensure only the logged-in user can update password.
  requireAuth,
  // Validate both current and new password fields.
  validate(passwordSchema),
  asyncHandler(async (req, res) => {
    // Fetch the user and include the password hash for comparison.
    const user = await User.findById(req.user._id).select('+passwordHash');

    // If the user was deleted or session is stale, reject access.
    if (!user) {
      throw ApiError.unauthorized('Session no longer valid');
    }

    // Verify the current password entered by the user.
    const ok = await user.comparePassword(req.body.currentPassword);

    // If current password is wrong, block the change.
    if (!ok) {
      throw ApiError.unauthorized('Current password is incorrect');
    }

    // Hash the new password before saving it.
    user.passwordHash = await User.hashPassword(req.body.newPassword);
    // Save the updated password to the database.
    await user.save();

    // Confirm password update succeeded.
    res.json({ ok: true });
  }),
);

// Export the router so the app can mount all auth routes.
module.exports = router;
