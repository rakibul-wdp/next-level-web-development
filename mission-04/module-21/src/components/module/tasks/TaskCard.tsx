import type { ITask } from "../../../types";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>{task.title}</h1>

        <div>
          <button>Trash</button>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <p>{task.description}</p>
    </div>
  );
}
