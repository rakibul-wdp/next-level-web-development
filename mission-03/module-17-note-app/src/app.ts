import { timeStamp } from "console";
import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();

app.use(express.json());

const noteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, default: "" },
    category: {
      type: String,
      enum: ["personal", "work", "study", "other"],
      default: "personal",
    },
    pinned: {
      type: Boolean,
      default: false,
    },
    tags: {
      label: { type: String, required: true },
      color: { type: String, default: "gray" },
    },
  },
  { versionKey: false, timestamps: true }
);

const Note = model("Note", noteSchema);

app.post("/notes/create-note", async (req: Request, res: Response) => {
  const body = req.body;

  const note = await Note.create(body);

  //   const myNote = new Note({
  //     title: "Learning MongoDB",
  //     tags: {
  //       label: "database",
  //     },
  //   });

  //   await myNote.save();

  res.status(201).json({
    success: true,
    message: "note created",
    note,
  });
});

app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(201).json({
    success: true,
    message: "note created",
    notes,
  });
});

app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const { noteId } = req.params;
  //   const note = await Note.findById(noteId);
  // const note = await Note.findOne({ _id: noteId });
  const note = await Note.findOne({ title: "Learning angular" });

  res.status(201).json({
    success: true,
    message: "note created",
    note,
  });
});

app.patch("/notes/:noteId", async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const updatedBody = req.body;
  // const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });
  // const note = await Note.updateOne({ _id: noteId }, updatedBody, {
  //   new: true,
  // });
  const note = await Note.findOneAndUpdate({ _id: noteId }, updatedBody, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: "note updated",
    note,
  });
});

app.delete("/notes/:noteId", async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const note = await Note.findByIdAndDelete(noteId);
  // const note = await Note.updateOne({ _id: noteId }, updatedBody, {
  //   new: true,
  // });
  // const note = await Note.findOneAndUpdate({ _id: noteId }, updatedBody, {
  //   new: true,
  // });

  res.status(201).json({
    success: true,
    message: "note deleted",
    note,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to note app");
});

export default app;
