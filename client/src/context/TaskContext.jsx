import { createContext, useContext } from "react";
const TaskContext  = createContext()

export const useTask = ()=>{
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTask must be used within a taskProvider")
    }
    return context
}

export function TaskProvaider ({children}){



    return(
        <TaskContext.Provider value={{}}>
                {children}
        </TaskContext.Provider>
    )
}
