import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
export const LoginPage = () => {

   const { signin} =useAuth() 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    signin(values)
    console.log(values);
  });

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900 ">
      <div className="bg-zinc-800 p-10 w-full  rounded-md max-w-md ">
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
      </div>
    </div>
  );
};
