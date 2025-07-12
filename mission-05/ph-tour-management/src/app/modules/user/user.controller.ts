import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";

// const createUserFunction = async (req: Request, res: Response) => {
//   const user = await UserServices.createUser(req.body);

//   res.status(httpStatus.CREATED).json({
//     message: "user created successfully",
//     user,
//   });
// };

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     createUserFunction(req, res);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body);

    res.status(httpStatus.CREATED).json({
      message: "user created successfully",
      user,
    });
  }
);

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserServices.getAllUsers();

    res.status(httpStatus.OK).json({
      success: true,
      message: "All Users Retrieved Successfully",
      data: users,
    });
  }
);

export const UserControllers = {
  createUser,
  getAllUsers,
};

// route matching -> controller -> service -> model -> DB
