
import { useEffect } from "react"
import { useTask } from "../context/TaskContext"
import { TaskCard } from "../components/TaskCard"

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

  return (
    <div className="grid grid-cols-3 gap-2">
      {
        tasks.map((task)=>(
         <TaskCard key={task._id} task={task}/>
        ))
      }
    </div>
    );
}
