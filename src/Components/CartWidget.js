import React from 'react'
import carrito from "../carrito.svg"
import {useCartContext} from './CartContext';
const CartWidget = () => {
    const {totalProducts, cart} = useCartContext();
    return (
        <div className='CartWidget'>
            <img src={carrito} alt="carrito"></img>
            <p className= "badge rounded-pill text-bg-dark">{totalProducts() ||cart}</p>
        </div>
    )
}

export default CartWidget