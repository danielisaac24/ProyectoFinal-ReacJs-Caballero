import React from 'react'
import carrito from "../carrito.svg"

const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <img src={carrito} alt="carrito"></img>
            <p>0</p>
        </div>
    )
}

export default CartWidget