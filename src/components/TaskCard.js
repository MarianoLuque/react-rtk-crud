import {deleteTask} from '../features/task/taskSlice'
import { useDispatch } from "react-redux"
import {Link} from 'react-router-dom'

export function TaskCard({ task }) {

  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const handleEdit = () => {
  
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p>{task.descripcion}</p>
      <p className={task.completed ? "bg-green-600" : "bg-red-600"}>
        {task.completed ? "Completada" : "Pendiente"}
      </p>
      <Link to={`/edit-task/${task.id}`} className="bg-indigo-600 mt-3 rounded-md px-2 mr-12 hover:bg-indigo-400">Editar</Link>
      <button 
        className="bg-indigo-600 mt-3 rounded-md px-2 hover:bg-indigo-400"
        onClick={() => handleDelete(task.id)}
        >Eliminar
      </button>
    </div>
  );
}
