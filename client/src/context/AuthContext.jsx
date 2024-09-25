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
  const [error, setError] = useState(null);

  // Función de registro de usuario
  const signup = async (userData) => {
    try {
      const res = await registerRequest(userData);
      setUser(res.data);
      setError(null); // Limpiar error si la solicitud es exitosa
    } catch (err) {
      setError(err.response?.data?.message || "Error during signup"); // Manejo de errores
    }
  };

  return (
    <AuthContext.Provider 
      value={{
        signup,
        user,
        error,  // Proporcionar error al contexto
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
