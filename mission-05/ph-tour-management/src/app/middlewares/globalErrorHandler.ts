import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import AppError from "../errorHelpers/AppError";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "something went wrong!";

  /**
   * Mongoose
   * - duplicate
   * - cast error
   * - validation
   */

  // duplicate error
  if (err.code === 11000) {
    console.log("Duplicate error", err.message);
    const matchedArray = err.message.match(/"([^"]*)"/);
    statusCode = 400;
    message = `${matchedArray[1]} already exists!`;
  }
  // object id error / cast error
  else if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid MongoDB ObjectID. Please provide valid id";
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    statusCode = 500;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    err,
    stack: envVars.NODE_ENV === "development" ? err.stack : null,
  });
};
