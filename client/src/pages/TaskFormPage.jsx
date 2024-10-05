import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";

export const TaskFormPage = () => {
  const { register, handleSubmit,setValue } = useForm();
 const {tasks,createTask,getTask,updateTask}= useTask()

const  navigate =  useNavigate()
//Params es para ver y leer lo que llega por la url 
const params = useParams()

 
 console.log(tasks)

 useEffect(() => {
    const loadTask =async()=>{
      
    if (params.id) {
     const task = await getTask(params.id)
      //Usamos el setValues de useForm que permite setear en los campos del dormulario
      console.log(task)
      //Empezamos a cargar en los value
      setValue('title',task.title)
      setValue('descripcion',task.descripcion)
    }
    }
    loadTask()
 }, [])
 

const onSubmit =  handleSubmit((values)=>{
  if (params.id) {
    updateTask(params.id,values)
  }else{
    createTask(values)
  
  }
  navigate('/tasks')
})

  return (
    <div className="bg-zinc-800 w-full p-10 max-w-md rounded-md">
      <h1 className="font-bold text-2xl flex justify-center">
        {
          params.id ? "Update Task" :  "ADD TASK"
        }
       
        
        </h1>
      <form action="" onSubmit={onSubmit }>
        <input
         {...register('title',{required:true})} 
         autoFocus
         type="text"
         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="title" 
          />

        <textarea 
        className="w-full bg-zinc-700 px-4 py-2 my-2 rounded-md "
        {...register('descripcion',{required:true})}
        rows={3} 
        placeholder="descripcion"
        ></textarea>

      {
        params.id ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
            Edit
          </button>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
            Save
          </button>
        )
      }

       
      </form>
    </div>
  );
};
