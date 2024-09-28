import { useAuth } from "./context/AuthContext"
import { Navigate ,Outlet } from "react-router-dom";


export const ProtectedRoute = () => {
    const { loading,isAuthenticate} =  useAuth();
    console.log(loading,isAuthenticate)

    if (loading) return <h1>loading...</h1>
    if (!loading && !isAuthenticate)return <Navigate to={'/login'} replace/>
    //El Outlet sirve para poder continuar con lo que había seleccionado la ruta
    return <Outlet/>;


}
