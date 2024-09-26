import { useForm } from "react-hook-form";
import  {useAuth}  from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const RegistPage = () => {

  const navigate = useNavigate()

  const {register, handleSubmit,formState:{errors}} = useForm()
  const { signup , isAuthenticate} = useAuth() 
  
  console.log(isAuthenticate)

 useEffect(() => {
   
  if (isAuthenticate) navigate('/tasks')
    
 }, [isAuthenticate])
 

  const onSubmit =  handleSubmit(async(values)=>{
    signup(values)
  })

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">

      <form onSubmit={ onSubmit}> 
        <input type="text" {...register("username",{required:true})}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Username"

        />
        {
          errors.username &&(
            <p className="text-red-500">
              Username is required
            </p>
          )
        }
        <input type="email" {...register("email",{required:true})}
         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
         placeholder="Email"
        />
          {
          errors.email &&(
            <p className="text-red-500">
              email is required
            </p>
          )
        }
        <input type="password" {...register("password",{required:true})}
         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
         placeholder="Password"
        />
        {
          errors.password &&(
            <p className="text-red-500">
              password is required
            </p>
          )
        }

        <button type="submit">
          Register
        </button>
      </form>

    </div>
  )
}


