

export const TaskCard = ({task}) => {
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
    <h1 className="font-bold text-2xl">{task.title}</h1>
      <p>{task.descripcion}</p>
     </div>
  )
}