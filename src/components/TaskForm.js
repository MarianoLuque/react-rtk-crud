import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    descripcion: "",
    completed: false,
  });
  useEffect(() => {
    if (params.id) {
      const oneTask = tasks.find((task) => task.id == params.id)
      document.formulario.completed.checked = oneTask.completed;
      console.log(oneTask)
      setTask(oneTask)

      //document.formulario.title.value = oneTask.title;
      //document.formulario.descripcion.value = oneTask.descripcion;
      
    }
  }, []);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    console.log(e)
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckedChange = (e) => {
    console.log(e)
    setTask({
      ...task,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      console.log(task)
      dispatch(editTask(task))
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  return (
    <form className="bg-slate-600 mx-auto w-3/6 px-20 py-20 flex space-x-4 pr-4 h-4 pb-48 rounded-3xl" name="formulario" onSubmit={handleSubmit}>
      <input
        className="h-20 rounded-md"
        type="text"
        name="title"
        placeholder="Titulo"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        className="h-20 rounded-md"
        onChange={handleChange}
        name="descripcion"
        placeholder="Descripcion"
        value={task.descripcion}
      ></textarea>
      <input
        className="h-20"
        onChange={handleCheckedChange}
        type="checkbox"
        id="completed"
        name="completed"
        for
        
      />
      <div><button className="text-white text-2xl bg-indigo-600 hover:bg-indigo-400 rounded-md px-2 h-20 w-30">Guardar</button></div>
    </form>
  );
}

export default TaskForm;
