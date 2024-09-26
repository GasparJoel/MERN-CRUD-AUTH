import { createContext, useContext, useState } from "react";

// Definir el contexto 
export const ProductContext = createContext();

// Crear un hook para poder consumirlo en cualquier parte del componente
export const useProductoContext = () => {
    const contexto = useContext(ProductContext);
    if (!contexto) {
        throw new Error("useProductoContext must be used within a ProductProvider");
    }
    return contexto;
};

export const ProductProvider = ({ children }) => {

    const newProducto ={
        nombre: "Inka",
        estado: "VALIDADO",
        precio: 15.20
    }
    const [producto, setProducto] = useState(newProducto);

    const valor = {
        producto,
        setProducto,  // Proporcionar también la función para modificar el producto si se necesita
    };

    return (
        <ProductContext.Provider value={valor}>
            {children}
        </ProductContext.Provider>
    );
};
