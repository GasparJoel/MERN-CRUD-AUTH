import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegistPage } from "./pages/RegistPage";
import { AuthProvider } from "./context/AuthContext";
import { ProfilePage } from "./pages/ProfilePage";
  



export const App = () => {
  return (

      <AuthProvider>
       
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={ <RegistPage/> } />  
          <Route path="/tasks" element={<h1>Tasks Page</h1>} />
          <Route path="/add-task" element={<h1>New Task</h1>} />
          <Route path="/tasks/:id" element={<h1>Update Task</h1>} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
     
      </AuthProvider>
  
  );
};
