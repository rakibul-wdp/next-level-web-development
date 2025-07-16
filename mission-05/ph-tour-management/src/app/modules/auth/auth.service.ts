import { IUser } from "../user/user.interface";
import httpStatus from "http-status-codes";
import { User } from "../user/user.model";
import AppError from "../../errorHelpers/AppError";
import bcryptjs from "bcryptjs";

const credentialsLogin = async (payload: Partial<IUser>) => {
  const { email, password } = payload;

  const ifUserExist = await User.findOne({ email });

  if (!ifUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "User doesn't Exist");
  }
  if (!ifUserExist.password) {
    throw new AppError(httpStatus.BAD_REQUEST, "User password not set");
  }

  const isPasswordMatched = await bcryptjs.compare(
    password as string,
    ifUserExist.password as string
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, "Incorrect Password");
  }

  return {
    email: ifUserExist.email,
  };
};

export const AuthServices = { credentialsLogin };
