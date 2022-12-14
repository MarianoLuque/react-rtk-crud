import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="App container p-10 mx-auto ">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList/>} />
            <Route path='/create-task' element={<TaskForm/>} />
            <Route path='/edit-task/:id' element={<TaskForm/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
