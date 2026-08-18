const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const rrquired = ['MONGO_URI', 'PORT', 'JWT_SECRET'];
const missing = rrquired.filter((key) => !process.env[key]);
if (missing.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missing.join(', ')}`,
  );
}

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 3000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  cookieName: process.env.COOKIE_NAME || 'arr_token',
  clientOrigin: (
    process.env.CLIENT_ORIGIN || 'http://localhost:5173,http://localhost:5174'
  )
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
    geminiApiKey: process.env.GEMINI_API_KEY || "<API_KEY>",
    geminiModel: process.env.GEMINI_MODEL || "gemini-2.5-flash",
    isProd: process.env.NODE_ENV === 'production',
};
