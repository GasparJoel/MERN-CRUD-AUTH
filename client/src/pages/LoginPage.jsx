import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
export const LoginPage = () => {

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin ,error:signinErrors } =useAuth() 
  const onSubmit = handleSubmit(async (values) => {
    signin(values)
    console.log(values);
  });

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900 ">
      <div className="bg-zinc-800 p-10 w-full  rounded-md max-w-md ">

    {/* Verificar si registerErrors es un array antes de mapear */}
    {signinErrors?.length > 0 && (
            signinErrors.map((error, i) => (
              <div key={i} className="bg-red-500 p-2 text-white my-2 rounded-md text-center">
                {error}
              </div>
            ))
          )}

        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white rounded-s-md  px-4 py-2 my-2"
            placeholder="Password "
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <button type="submit">Login</button>
        </form>
        <p className="flex  gap-x-2 justify-between">
          dont  have a n account? <Link  to="/register" className="text-sky-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};
