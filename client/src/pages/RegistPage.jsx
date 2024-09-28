import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export const RegistPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticate, error: errores } = useAuth();

  console.log(isAuthenticate);

  useEffect(() => {
    if (isAuthenticate) navigate("/tasks");
  }, [isAuthenticate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900 ">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <h1 className="text-2xl font-bold ">Register</h1>
        {/* Verificar si registerErrors es un array antes de mapear */}
        {errores?.length > 0 &&
          errores.map((error, i) => (
            <div key={i} className="bg-red-500 p-2 text-white my-2 rounded-md">
              {error}
            </div>
          ))}

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">password is required</p>
          )}

          <button type="submit">Register</button>
        </form>

        <p className="flex  gap-x-2 justify-between">
          already have an account?{" "}
          <Link to="/login" className="text-sky-500">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};
