import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import AppError from "../errorHelpers/AppError";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorSources: any = [
    // {
    //   path: "isDeleted",
    //   message: "Cast Failed error",
    // },
  ];

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
  } else if (err.name === "ZodError") {
    statusCode = 400;
    message = "Zod Error";

    console.log(err.issues);
    err.issues.forEach((issue: any) => {
      errorSources.push({
        path: issue.path[issue.path.length - 1],
        // path: "nickname inside lastName",
        message: issue.message,
      });
    });
  }
  // mongoose validation error
  else if (err.name === "ValidationError") {
    statusCode = 400;
    const errors = Object.values(err.errors);

    errors.forEach((errorObject: any) =>
      errorSources.push({
        path: errorObject.path,
        message: errorObject.message,
      })
    );
    message = "Validation error occurred";
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
    errorSources,
    // err,
    stack: envVars.NODE_ENV === "development" ? err.stack : null,
  });
};
