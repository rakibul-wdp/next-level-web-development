import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

app.use(express.json());

const todosRouter = express.Router();

const filePath = path.join(__dirname, "../../db/todo.json");

app.use("/", todosRouter);

todosRouter.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });

  res.json({
    message: "from todos router",
    data,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!");
});

app.get("/todos/:title", (req: Request, res: Response) => {
  console.log(req.query);
  console.log(req.params);
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });

  // console.log(data);
  res.json(data);
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;

  console.log(title, body);
  res.json({ title, body });
});

export default app;
