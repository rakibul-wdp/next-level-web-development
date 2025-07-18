import { IUser } from "../user/user.interface";
import httpStatus from "http-status-codes";
import { User } from "../user/user.model";
import AppError from "../../errorHelpers/AppError";
import bcryptjs from "bcryptjs";
import { generateToken } from "../../utils/jwt";
import { envVars } from "../../config/env";
import { createUserToken } from "../../utils/userTokens";

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

  // const jwtPayload = {
  //   userId: ifUserExist._id,
  //   email: ifUserExist.email,
  //   role: ifUserExist.role,
  // };
  // const accessToken = generateToken(
  //   jwtPayload,
  //   envVars.JWT_ACCESS_SECRET,
  //   envVars.JWT_ACCESS_EXPIRES
  // );

  // const refreshToken = generateToken(
  //   jwtPayload,
  //   envVars.JWT_REFRESH_SECRET,
  //   envVars.JWT_REFRESH_EXPIRES
  // );

  const userTokens = createUserToken(ifUserExist);

  const { password: pass, ...rest } = ifUserExist.toObject();

  return {
    accessToken: userTokens.accessToken,
    refreshToken: userTokens.refreshToken,
    user: rest,
  };
};

export const AuthServices = { credentialsLogin };

// user - login - token (email, role, _id)
