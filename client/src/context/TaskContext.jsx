import { createContext, useContext, useState } from "react";
import { registerTaskRequest } from "../api/task";

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

        //Funcion para agregar task 
        const createTask=async(task)=>{
         
    
            const res  = await registerTaskRequest(task)
            console.log(res)
         
        }

    return(
        <TaskContext.Provider 
        value={{
            tasks,
            createTask
        }}
        
        >
                {children}
        </TaskContext.Provider>
    )
}
