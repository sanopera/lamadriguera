import { Children, createContext } from "react";
import { useState } from "react";

export const CartContext = createContext ([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items, cantidad){

        const index = cartList.findIndex(i => i.id === items.id)
        

        if(index > -1)
        {
            const quantityOld = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, {...items, cantidad: items.cantidad + quantityOld}])
        }else{
            setCartList([...cartList, items])
        }

    }

    const totalCantidad = () =>
    {
        const cantidadTotal = cartList.reduce((prev,curr) => prev + curr.cantidad,0);
        return cantidadTotal
    };

    const totalPrecio = () =>
    {
        const cantidadprecio = cartList.reduce((prev,curr) => prev + curr.price * curr.cantidad,0);
        return cantidadprecio
    };

    function vaciarCarrito()
    {
        setCartList([])
    }

    const eliminarProducto = (id) =>
    {
        const ItemFiltrado =  cartList.filter((producto) => producto.id !== id)
        setCartList(ItemFiltrado)
    }
    

    return(

        <CartContext.Provider value = {{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            totalCantidad,
            totalPrecio,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>

    )

}