import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";

export const notesRoutes = express.Router();

notesRoutes.post("/create-note", async (req: Request, res: Response) => {
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

notesRoutes.get("", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(201).json({
    success: true,
    message: "note created",
    notes,
  });
});

notesRoutes.get("/:noteId", async (req: Request, res: Response) => {
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

notesRoutes.patch("/:noteId", async (req: Request, res: Response) => {
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

notesRoutes.delete("/:noteId", async (req: Request, res: Response) => {
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
