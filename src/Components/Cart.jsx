import React, { useContext } from 'react'
import { CartContect } from '../context/Cart'
const Cart = () => {
    const cartitems = useContext(CartContect)
    console.log(cartitems)
    const total = cartitems.items.reduce((total, item) => total + item.price, 0)
    return (
        <div className='cart'>
            {cartitems.items.length > 0 ? (cartitems.items.map((item) => (
                <div>
                    <li> {item.name} - {item.price}</li>
                </div>
            ))) : (<h1>Empty Item</h1>)}
            { }
            <h5>Total Bill : ${total}</h5>

        </div>
    )
}

export default Cart
