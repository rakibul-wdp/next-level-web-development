import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const usersRoutes = express.Router();

usersRoutes.post("/create-user", async (req: Request, res: Response) => {
  const body = req.body;

  const user = await User.create(body);

  res.status(201).json({
    success: true,
    message: "user created",
    user,
  });
});

usersRoutes.get("", async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(201).json({
    success: true,
    message: "note created",
    users,
  });
});

usersRoutes.get("/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  // const note = await User.findOne({ _id: userId });
  // const user = await User.findOne({ title: "Learning angular" });

  res.status(201).json({
    success: true,
    message: "user found",
    user,
  });
});

usersRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  const updatedBody = req.body;
  // const user = await User.findByIdAndUpdate(userId, updatedBody, { new: true });
  // const user = await User.updateOne({ _id: userId }, updatedBody, {
  //   new: true,
  // });
  const user = await User.findOneAndUpdate({ _id: userId }, updatedBody, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: "user updated",
    user,
  });
});

usersRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await User.findByIdAndDelete(userId);
  // const user = await User.updateOne({ _id: userId }, updatedBody, {
  //   new: true,
  // });
  // const user = await User.findOneAndUpdate({ _id: userId }, updatedBody, {
  //   new: true,
  // });

  res.status(201).json({
    success: true,
    message: "user deleted",
    user,
  });
});
