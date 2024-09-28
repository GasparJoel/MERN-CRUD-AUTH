import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest ,loginRequest ,verityTokenRequet} from "../api/auth";
import  Cookies  from "js-cookie";


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
 const [loading, setloading] = useState(true)

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
      setisAuthenticate(true)
      setUser(res.data)

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
  
  //Para poder obtener las cookies y hacer las validaciones de las paginas 
  useEffect(() => {
    async function CheckLogin() {
    const cookies = Cookies.get();
    //Comprueba si  no hay un toquen 
    if (!cookies.token) {
      //Pasar todo falso tanto la autentication , user,loading 
      setisAuthenticate(false)
      setloading(false)
      setUser(null)
    }
    //Si en caso hay un token
     try {
      //Verifica el token por que pueden haber ingresado manualmente en el navegador
      const res  = await verityTokenRequet(cookies.token)
     // console.log(res)
     //Si no te esta respondiendo ningun dato 
      if (!res.data) {
        setisAuthenticate(false)
        setloading(false)
        return;
      }
       //Si te responde algun dato quiere decir que el usuario esta ahí 
        setisAuthenticate(true)
        setUser(res.data)
        setloading(false)
     } catch (error) {  
      setisAuthenticate(false)
      setUser(null)
      setloading(false)
     }
    
   }
   CheckLogin()
}, []);
  

  return (
    <AuthContext.Provider 
      value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticate,
        error,  // Proporcionar error al contexto
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
