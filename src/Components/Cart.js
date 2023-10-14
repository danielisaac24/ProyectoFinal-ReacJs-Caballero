
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Hacer compras</Link>
            </>
        )
    }

    return (
        <div className='carrito'>
            {cart.map((product) => (
                
                <ItemCart key={product.id} product={product} />
            ))}
            <hr/>
            <p>Total: $ {totalPrice()}</p>
            <br />
            <Link to="/checkout">
                {' '}
                <button className="btn-total">Finalizar Compra</button>
            </Link>
        </div>
        
    );
};

export default Cart;