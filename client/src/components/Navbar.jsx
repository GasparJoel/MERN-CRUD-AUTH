import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { isAuthenticate } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold ">Tasks Manager</h1>
      </Link>

      <ul className="flex gap-x-2">
        {isAuthenticate ? (
          <>
            <li>
              <Link>Welcome user</Link>
            </li>
            <li>
              <Link to={"/add-task"}>Add Task</Link>
            </li>
            <li>
              <Link to={"/add-task"}>Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
