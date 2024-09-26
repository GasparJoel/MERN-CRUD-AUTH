import { useProductoContext } from "../context/ProductoContext";

export const ProfilePage = () => {

    const {producto,setProducto} = useProductoContext()

    console.log(producto)

    const OnclickName =()=>{
        setProducto({nombre : "Coca Cola "})
    }
  return (
    <div>
        {producto.nombre}

        <button className="btn " onClick={OnclickName}>Cambiar Nombre</button>
    
    </div>

  )
}
