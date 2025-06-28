import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "../../../types";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
    {
      id: "1006631",
      title: "Initialize frontend",
      description: "Create Home page, and routing",
      dueDate: "2025-07",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
