import { toggleCompleteState } from "../../../redux/features/task/taskSlice";
import { useAppDispatch } from "../../../redux/hook";
import type { ITask } from "../../../types";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className={`${task.isCompleted ? "line-through" : ""}`}>
          {task.title}
        </h1>

        <div>
          <button>Trash</button>
          <input
            type="checkbox"
            name=""
            id=""
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p>{task.description}</p>
    </div>
  );
}
