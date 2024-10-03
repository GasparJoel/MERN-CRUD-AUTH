
import { useEffect } from "react"
import { useTask } from "../context/TaskContext"

export const TasksPage = () => {
    
    const {getTasks , tasks}   = useTask()
    useEffect(() => {
      getTasks()
   
    }, [])
    
   //Si en caso no hay tareas 
   if (tasks.length === 0) {
    return ( 
      <h1> No tasks</h1>
    )
  }
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
