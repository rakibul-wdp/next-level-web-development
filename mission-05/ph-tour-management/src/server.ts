import dotenv from "dotenv";
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";

let server: Server;

dotenv.config();

const startServer = async () => {
  try {
    await mongoose.connect(envVars.MONGODB_URL);

    console.log("connected to db");

    server = app.listen(envVars.PORT, () => {
      console.log(`server is listening to port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

process.on("SIGTERM", () => {
  console.log("signterm signal recieved... server shutting down...");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("SIGINT", () => {
  console.log("sigint signal recieved... server shutting down...");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

(async () => {
  await startServer();
  await seedSuperAdmin();
})();

process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection detected... server shutting down...", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log("uncaughtException detected... server shutting down...", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// unhandler rejection error
// Promise.reject(new Error("I forgot to catch this promise"));

// uncaught exception error
// throw new Error("I forgot to handle this local error");

/**
 * un-handle rejection error
 * uncaught rejection error
 * signal termination sigterm
 */
