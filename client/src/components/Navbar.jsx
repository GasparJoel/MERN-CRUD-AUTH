import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { isAuthenticate,logout ,user} = useAuth();

  console.log(user)
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold ">Tasks Manager</h1>
      </Link>

      <ul className="flex gap-x-2">
        {isAuthenticate ? (
          <>
            <li>
              <Link>Welcome {user.username}</Link>
            </li>
            <li>
              <Link to={"/add-task"}
              className="bg-indigo-500 py-1 px-4 rounded-sm"
              >Add Task</Link>
            </li>
            <li>
              <Link to={"/"} onClick={()=>{
                logout()
              }}>Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"} className="bg-indigo-500 py-1 px-4 rounded-sm">Login</Link>
            </li>
            <li>
              <Link to={"/register"} className="bg-indigo-500 py-1 px-4 rounded-sm">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
