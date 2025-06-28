import AddTaskModal from "../components/module/tasks/AddTaskModal";
import TaskCard from "../components/module/tasks/TaskCard";
import { selectTasks } from "../redux/features/task/taskSlice";
import { useAppSelector } from "../redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);

  return (
    <div>
      <div>
        <h1>Tasks</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
