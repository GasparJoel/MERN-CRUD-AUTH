import { createContext, useContext, useState } from "react";
import { registerTaskRequest ,getTasksRequest ,deleteTaskRequest,getTaskRequest,updateTaskRequest} from "../api/task";


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
        //Funcion para eliminar las tareas 
        const deleteTask = async(id)=>{
            try {
                const res = await deleteTaskRequest(id)
                //Lista las tareas pero mennos el que acabamos de eliminar es para setear la interface
                if (res.status ===204) setTasks(tasks.filter(task=> task._id != id)) 
            } catch (error) {
                console.log(error)
            }
           
        }
        //Funcion para obtener los datos de una tarea 
        const getTask = async(id)=>{

            try {
            const res = await getTaskRequest(id)
             return  res.data
            } catch (error) {
                console.log(error)
            }
        }
        //Funcion para editar 
        const updateTask = async(id,task)=>{
            try {
                await updateTaskRequest(id,task)
                //En el update ya no es necesario 
               // if(res.status===201) setTasks(task.filter(task =>task._id != id))
            } catch (error) {
                console.log(error)
            }
        }

    return(
        <TaskContext.Provider 
        value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask
        }}
        
        >
                {children}
        </TaskContext.Provider>
    )
}
