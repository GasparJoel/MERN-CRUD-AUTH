import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegistPage } from "./pages/RegistPage";
import { AuthProvider } from "./context/AuthContext";
import { ProfilePage } from "./pages/ProfilePage";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { HomePage } from "./pages/HomePage";
import {ProtectedRoute} from "./ProtectedRoute";  



export const App = () => {
  return (

      <AuthProvider>
       
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={ <RegistPage/> } />  

          <Route element={<ProtectedRoute/>}>
              <Route path="/tasks" element={<TasksPage/>} />
                <Route path="/add-task" element={<TaskFormPage/>} />
                <Route path="/tasks/:id" element={<TaskFormPage/>} />
                <Route path="/profile" element={<ProfilePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
     
      </AuthProvider>
  
  );
};
