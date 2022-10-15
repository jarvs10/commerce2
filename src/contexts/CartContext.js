import { createContext, useState, useContext } from "react";

const defaultState = {
    quanty: 0
};

const CartContext = createContext(defaultState);

export const CartContextStore = (props) => {
    
    const [ cart, setCart ] = useState(defaultState);

    const addProductCart = () => {

        setCart((prevState) => ({...prevState, quanty: prevState.quanty + 1 }))
        //setCart(cart.reduce((total, suma) => total + suma.quanty, 0))
    }

    return (
        <CartContext.Provider value={{cart, addProductCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
