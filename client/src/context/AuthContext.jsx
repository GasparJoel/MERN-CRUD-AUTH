import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest ,loginRequest } from "../api/auth";
import errorMap from "zod/locales/en.js";

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para consumir el contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);
  const [isAuthenticate, setisAuthenticate] = useState(false)

  // Función de registro de usuario
  const signup = async (userData) => {
    try {
      const res = await registerRequest(userData);
      setUser(res.data);
      setError(null); // Limpiar error si la solicitud es exitosa
      setisAuthenticate(true)
    } catch (err) {
      console.log(err.response)
      setError(err.response.data); // Manejo de errores
      
    }
  };

  //PARA INICIAR SESION al usuario
  const signin = async (userData) => {
   
    try {
      const res = await loginRequest(userData)
      console.log(res)

    } catch (error) {
      if (Array.isArray(error.response.data)) {
       return setError(error.response.data)
      }
      setError([error.response.data.message])
     
    }
  };

  //Para colocar tiempo en que se muestra los errores 
  useEffect(() => {

  if (error.length > 0) {
    const timer =  setTimeout(() => {
      setError([])
    }, 5000);
    return()=>clearTimeout(timer)
  }
  }, [error])
  

  return (
    <AuthContext.Provider 
      value={{
        signup,
        signin,
        user,
        isAuthenticate,
        error,  // Proporcionar error al contexto
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
