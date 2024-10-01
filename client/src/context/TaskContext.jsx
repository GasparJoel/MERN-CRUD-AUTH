import { createContext, useContext, useState } from "react";
import { registerTaskRequest ,getTasksRequest } from "../api/task";


const TaskContext  = createContext()

export const useTask = ()=>{
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTask must be used within a taskProvider")
    }
    return context
}

export function TaskProvaider ({children}){
        const [tasks, setTasks] = useState([])
    
        //Funcion para obtener todos los tasks
        const getTasks=async()=>{
            try {
                const res = await getTasksRequest()
                setTasks(res.data)
    
            } catch (error) {
                console.log(error)
            }
        }
        //Funcion para agregar task 
        const createTask=async(task)=>{
            const res  = await registerTaskRequest(task)
            console.log(res)
        }

    return(
        <TaskContext.Provider 
        value={{
            tasks,
            createTask,
            getTasks
        }}
        
        >
                {children}
        </TaskContext.Provider>
    )
}
