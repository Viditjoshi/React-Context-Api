import { createContext, useState } from "react";

export const CartContect = createContext(null);


export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    return (
        <CartContect.Provider value={{ items, setItems }}>
            {props.children}
        </CartContect.Provider>
    )
}