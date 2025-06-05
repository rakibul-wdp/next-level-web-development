import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

export const todosRouter = express.Router();

const filePath = path.join(__dirname, "../../../db/todo.json");

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });

  res.json({
    message: "from todos router",
    data,
  });
});

todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;

  console.log(title, body);
  res.json({ title, body });
});

todosRouter.get("/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;

  console.log(title, body);
  res.json({ title, body });
});

todosRouter.put("/update-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;

  console.log(title, body);
  res.json({ title, body });
});

todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;

  console.log(title, body);
  res.json({ title, body });
});
