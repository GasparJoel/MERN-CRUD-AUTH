
import { useEffect } from "react"
import { useTask } from "../context/TaskContext"

export const TasksPage = () => {
    
    const {getTasks , tasks}   = useTask()
    useEffect(() => {
      getTasks()
    }, [])
    

  return  <div>
      {
        tasks.map(task=>(
          <div key={task._id}>
            <h1 className="font-bold text-2xl">{task.title}</h1>
            <p>{task.descripcion}</p>
          </div>
        ))
      }
    </div>
  
}
