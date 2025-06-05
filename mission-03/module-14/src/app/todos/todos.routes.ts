import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { client } from "../../config/mongodb";

export const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isCompleted: false,
  });

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const todo = await collection.findOne({ _id: new ObjectId(id) });

  res.json(todo);
});

todosRouter.put("/update-todo/:id", (req: Request, res: Response) => {
  const { title, body } = req.body;

  console.log(title, body);
  res.json({ title, body });
});

todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  await collection.deleteOne({ _id: new ObjectId(id) });

  res.json({
    message: "Deleted",
  });
});

/*
@todos
title
description
priority: High, Medium, Low
isCompleted: true
*/
