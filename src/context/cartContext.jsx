import { Children, createContext } from "react";
import { useState } from "react";

export const CartContext = createContext ([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items){

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

    function vaciarCarrito()
    {
        setCartList([])
    }

    return(

        <CartContext.Provider value = {{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>

    )

}