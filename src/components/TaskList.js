import { useSelector } from "react-redux";
import { TaskCard } from "./TaskCard";
import {Link} from 'react-router-dom'

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  if (tasks.length == 0) {
    return (
      <div className="text-white text-4xl font-bold text-center">
        No hay tareas
      </div>
    );
  }

  return (
    <div>
      <header className="text-white font-bold capitalize mb-10">
        <h1 className="text-5xl mb-6">Tasks counter: {tasks.length}</h1>
        <Link className="text-2xl bg-indigo-600 hover:bg-indigo-400 rounded-md px-2 py-1" to='/create-task'>
            Create Task
        </Link>
      </header>
      <div className="grid grid-cols-4 gap-2 m-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
