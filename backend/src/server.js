const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const env = require('./config/env');
const { connectDB } = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const healthRoutes = require('./routes/health');
const authRouter = require('./routes/auth');
const resumeRouter = require('./routes/resume');
const dashboardRouter = require('./routes/dashboard');
const insightsRouter = require('./routes/insights');
const versionsRouter = require('./routes/versions');
const historyRouter = require('./routes/history');

const app = express();

/* =========================================================
   BASIC SERVER CONFIG
========================================================= */

app.set('trust proxy', 1);

app.disable('x-powered-by');

/* =========================================================
   CORS
========================================================= */

/*
  Frontends allowed to communicate with this backend.

  Local:
  http://localhost:5173  → Vite dev
  http://localhost:4173  → Vite preview

  Production:
  https://resume-checker-app-iota.vercel.app
*/

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',

  // Your deployed Vercel frontend
  'https://resume-checker-app-iota.vercel.app',

  // Optional CLIENT_URL from Render env
  env.clientUrl,
]
  .filter(Boolean)
  .map((origin) => origin.replace(/\/$/, ''));

const corsOptions = {
  origin(origin, callback) {
    /*
      Requests such as Render health checks,
      Postman, curl etc. may not contain Origin.
    */
    if (!origin) {
      return callback(null, true);
    }

    const normalizedOrigin = origin.replace(/\/$/, '');

    if (allowedOrigins.includes(normalizedOrigin)) {
      return callback(null, true);
    }

    console.warn(`CORS blocked origin: ${origin}`);

    return callback(new Error('Not allowed by CORS'));
  },

  /*
    Required because authentication
    is cookie based.
  */
  credentials: true,

  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

/* =========================================================
   BODY / COOKIE PARSERS
========================================================= */

app.use(
  express.json({
    limit: '1mb',
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: '1mb',
  }),
);

app.use(cookieParser());

/* =========================================================
   LOGGING
========================================================= */

if (!env.isProd) {
  app.use(morgan('dev'));
}

/* =========================================================
   ROUTES
========================================================= */

app.use('/api/health', healthRoutes);

app.use('/api/auth', authRouter);

app.use('/api/resumes', resumeRouter);

app.use('/api/dashboard', dashboardRouter);

app.use('/api/insights', insightsRouter);

app.use('/api/versions', versionsRouter);

app.use('/api/history', historyRouter);

/* =========================================================
   ERROR HANDLING
   MUST stay after routes
========================================================= */

app.use(notFound);
app.use(errorHandler);

/* =========================================================
   START SERVER
========================================================= */

async function start() {
  try {
    await connectDB();

    app.listen(env.port, () => {
      console.log(`Server running in ${env.nodeEnv} mode on port ${env.port}`);

      console.log('Allowed frontend origins:', allowedOrigins);
    });
  } catch (err) {
    console.error('Failed to start server:', err);

    process.exit(1);
  }
}

/* =========================================================
   PROCESS ERROR HANDLING
========================================================= */

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);

  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);

  process.exit(1);
});

/* =========================================================
   BOOT
========================================================= */

start();

module.exports = app;
