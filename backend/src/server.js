const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const env = require("./config/env");
const { connectDB } = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const healthRoutes = require("./routes/health");
const authRouter = require("./routes/auth");
const resumeRouter = require("./routes/resume");

const app = express();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(cookieParser());

if (!env.isProd) {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRouter);
app.use("/api/resumes", resumeRouter);

// These MUST stay after all routes
app.use(notFound);
app.use(errorHandler);

async function start() {
  try {
    await connectDB();

    app.listen(env.port, () => {
      console.log(
        `Server running in ${env.nodeEnv} mode on port ${env.port}`
      );
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

start();

module.exports = app;