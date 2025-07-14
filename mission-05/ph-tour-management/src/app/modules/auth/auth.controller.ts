import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

const credentialsLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const result = await UserServices.getAllUsers();

    // res.status(httpStatus.OK).json({
    //   success: true,
    //   message: "All Users Retrieved Successfully",
    //   data: users,
    // });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User Logged In successfully",
      data: result.data,
    });
  }
);

export const AuthControllers = { credentialsLogin };
