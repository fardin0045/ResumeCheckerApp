const express = require("express");
const { z } = require("zod");

const env = require("../config/env");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");

const {
  signToken,
  cookieOptions,
} = require("../utils/jwt");

const { validate } = require("../middleware/validate");
const { requireAuth } = require("../middleware/auth");
const { authLimiter } = require("../middleware/rateLimit");
const User = require("../models/User");

const router = express.Router();

/* =========================================================
   VALIDATION
========================================================= */

const registerSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(128),
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1).max(128),
});

const profileSchema = z.object({
  name: z.string().trim().min(1).max(80),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(1).max(128),
  newPassword: z.string().min(8).max(128),
});

/* =========================================================
   PRODUCTION-SAFE COOKIE OPTIONS
========================================================= */

function getSessionCookieOptions() {
  return {
    ...cookieOptions,

    httpOnly: true,

    /*
      Local:
      http://localhost → false

      Production:
      HTTPS Vercel + Render → true
    */
    secure: env.isProd,

    /*
      Vercel frontend and Render backend are different sites.

      Production MUST use "none".
    */
    sameSite: env.isProd ? "none" : "lax",

    /*
      Cookie should work for all API routes.
    */
    path: "/",
  };
}

/* =========================================================
   ISSUE SESSION
========================================================= */

function issueSession(res, user) {
  const token = signToken({
    sub: user._id.toString(),
  });

  res.cookie(
    env.cookieName,
    token,
    getSessionCookieOptions(),
  );
}

/* =========================================================
   REGISTER
========================================================= */

router.post(
  "/register",
  authLimiter,
  validate(registerSchema),

  asyncHandler(async (req, res) => {
    const {
      name,
      email,
      password,
    } = req.body;

    const existing =
      await User.findOne({
        email,
      });

    if (existing) {
      throw ApiError.conflict(
        "Email already registered",
      );
    }

    const passwordHash =
      await User.hashPassword(password);

    const user =
      await User.create({
        name,
        email,
        passwordHash,
      });

    issueSession(res, user);

    res.status(201).json({
      user,
    });
  }),
);

/* =========================================================
   LOGIN
========================================================= */

router.post(
  "/login",
  authLimiter,
  validate(loginSchema),

  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    const user =
      await User.findOne({
        email,
      }).select("+passwordHash");

    if (!user) {
      throw ApiError.unauthorized(
        "Invalid credentials",
      );
    }

    const ok =
      await user.comparePassword(
        password,
      );

    if (!ok) {
      throw ApiError.unauthorized(
        "Invalid credentials",
      );
    }

    issueSession(res, user);

    res.json({
      user,
    });
  }),
);

/* =========================================================
   LOGOUT
========================================================= */

router.post(
  "/logout",
  (req, res) => {
    const clearOptions =
      getSessionCookieOptions();

    /*
      clearCookie should use the same
      secure / sameSite / path values
      used when the cookie was created.
    */

    delete clearOptions.maxAge;
    delete clearOptions.expires;

    res.clearCookie(
      env.cookieName,
      clearOptions,
    );

    res.json({
      ok: true,
    });
  },
);

/* =========================================================
   CURRENT USER
========================================================= */

router.get(
  "/me",
  requireAuth,

  asyncHandler(async (req, res) => {
    res.json({
      user: req.user,
    });
  }),
);

/* =========================================================
   UPDATE PROFILE
========================================================= */

router.patch(
  "/profile",
  requireAuth,
  validate(profileSchema),

  asyncHandler(async (req, res) => {
    req.user.name =
      req.body.name;

    await req.user.save();

    res.json({
      user: req.user,
    });
  }),
);

/* =========================================================
   CHANGE PASSWORD
========================================================= */

router.patch(
  "/password",
  authLimiter,
  requireAuth,
  validate(passwordSchema),

  asyncHandler(async (req, res) => {
    const user =
      await User.findById(
        req.user._id,
      ).select("+passwordHash");

    if (!user) {
      throw ApiError.unauthorized(
        "Session no longer valid",
      );
    }

    const ok =
      await user.comparePassword(
        req.body.currentPassword,
      );

    if (!ok) {
      throw ApiError.unauthorized(
        "Current password is incorrect",
      );
    }

    user.passwordHash =
      await User.hashPassword(
        req.body.newPassword,
      );

    await user.save();

    res.json({
      ok: true,
    });
  }),
);

module.exports = router;