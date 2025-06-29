import { useState } from "react";
import AddTaskModal from "../components/module/tasks/AddTaskModal";
import TaskCard from "../components/module/tasks/TaskCard";
import { selectTasks } from "../redux/features/task/taskSlice";
import { useAppSelector } from "../redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <AddTaskModal onClose={() => setIsModalOpen(false)} />
        </div>
      )}

      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
