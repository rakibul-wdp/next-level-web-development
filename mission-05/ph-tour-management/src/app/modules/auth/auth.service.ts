import { IUser } from "../user/user.interface";
import httpStatus from "http-status-codes";
import { User } from "../user/user.model";
import AppError from "../../errorHelpers/AppError";
import bcryptjs from "bcryptjs";
import {
  createNewAccessTokenWithRefreshToken,
  createUserTokens,
} from "../../utils/userTokens";

const credentialsLogin = async (payload: Partial<IUser>) => {
  const { email, password } = payload;

  console.log("mail ", email);

  const isUserExist = await User.findOne({ email });

  console.log(isUserExist);

  if (!isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "User doesn't Exist");
  }
  if (!isUserExist.password) {
    throw new AppError(httpStatus.BAD_REQUEST, "User password not set");
  }

  const isPasswordMatched = await bcryptjs.compare(
    password as string,
    isUserExist.password as string
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, "Incorrect Password");
  }

  // const jwtPayload = {
  //   userId: isUserExist._id,
  //   email: isUserExist.email,
  //   role: isUserExist.role,
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

  const userTokens = createUserTokens(isUserExist);

  const { password: pass, ...rest } = isUserExist.toObject();

  return {
    accessToken: userTokens.accessToken,
    refreshToken: userTokens.refreshToken,
    user: rest,
  };
};

const getNewAccessToken = async (refreshToken: string) => {
  const newAccessToken = await createNewAccessTokenWithRefreshToken(
    refreshToken
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthServices = { credentialsLogin, getNewAccessToken };

// user - login - token (email, role, _id)
