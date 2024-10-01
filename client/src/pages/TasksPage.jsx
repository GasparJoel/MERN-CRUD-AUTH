import { useAuth } from "../context/AuthContext"

export const TasksPage = () => {
    const  {user} =  useAuth()
    console.log(user)

  return (
    <div>TasksPage</div>
  )
}
