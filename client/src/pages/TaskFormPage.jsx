import { useForm } from "react-hook-form";

export const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();

const onSubmit =  handleSubmit((values)=>{
  console.log(values)
})

  return (
    <div className="bg-zinc-800 w-full p-10 max-w-md rounded-md">
      <h1 className="font-bold text-2xl flex justify-center">ADD TASK</h1>
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
        {...register('description',{required:true})}
        rows={3} 
        placeholder="Descriction"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Save</button>
      </form>
    </div>
  );
};
