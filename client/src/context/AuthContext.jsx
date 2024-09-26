import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth";

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

  return (
    <AuthContext.Provider 
      value={{
        signup,
        user,
        isAuthenticate,
        error,  // Proporcionar error al contexto
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
