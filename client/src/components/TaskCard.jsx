export const TaskCard = ({ task }) => {
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
      <h1 className="font-bold text-2xl">{task.title}</h1>
      <div className="grid grid-cols-2 gap-1">
        <button className="bg-rose-500 text-white font-bold px-2 py-1 rounded-md hover:bg-red-600">
          Delete
        </button>
        <button className="bg-blue-400 text-white font-bold px-2 py-1 rounded-md hover:bg-blue-500">Edit</button>
      </div>
      <p className="text-slate-300 ">{task.descripcion}</p>
      <p>{new Date(task.date).toLocaleString()}</p>
    </div>
  );
};
