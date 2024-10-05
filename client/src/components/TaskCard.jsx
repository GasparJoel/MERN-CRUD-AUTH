import { Link } from "react-router-dom";
import { useTask } from "../context/TaskContext";

export const TaskCard = ({ task }) => {

    const { deleteTask } = useTask()

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
     <header className="flex justify-between">
     <h1 className="font-bold text-2xl">{task.title}</h1>
      <div className="flex gap-x-2 items-center">
        <button className="bg-rose-500 text-white font-bold px-2 py-1 rounded-md hover:bg-red-600"
        onClick={()=>deleteTask(task._id)}
        >
          Delete
        </button>

      
        <Link 
        className="bg-blue-400 text-white font-bold px-2 py-1 rounded-md hover:bg-blue-500"
        to={`/tasks/${task._id}`}
        >
          Edit

        </Link>
      </div>
     </header>
      <p className="text-slate-300 ">{task.descripcion}</p>
      <p>{new Date(task.date).toLocaleString()}</p>
    </div>
  );
};
