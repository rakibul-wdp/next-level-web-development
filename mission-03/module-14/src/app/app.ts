import express, { Application, NextFunction, Request, Response } from "express";
import { todosRouter } from "./todos/todos.routes";
const app: Application = express();

app.use(express.json());

const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log({ url: req.url, method: req.method, header: req.header });
    next();
  },
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(something);
      res.send("Hello World!!!");
    } catch (error) {
      next(error);
    }
  }
);

app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(something);
    res.send("Hello World!!!");
  } catch (error) {
    next(error);
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "route not found" });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log(error);
    res.status(500).json({ message: "something wrong global", error });
  }
});

export default app;
