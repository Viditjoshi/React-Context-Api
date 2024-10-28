import React, { useContext } from 'react'
import { CartContect } from '../context/Cart'
const Item = ({ name, price }) => {
    const cart = useContext(CartContect);

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <button onClick={() => cart.setItems([...cart.items, { name: name, price: price }])}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Item

