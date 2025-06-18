import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import validator from "validator";

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: [true, "provide first name"],
    trim: true,
    minlength: 5,
    maxlength: 10,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 60,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "invalid email {VALUE}"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    uppercase: true,
    enum: {
      values: ["USER", "ADMIN", "SUPERADMIN"],
      message: "role is not valid. got {VALUE}",
    },
    default: "USER",
  },
});

export const User = model<IUser>("User", userSchema);
