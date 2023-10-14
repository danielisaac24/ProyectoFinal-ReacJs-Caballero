
import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

const ItemDetail = ({ item }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }

    return (
        <div className='row mt-2'>
            <div className='col-md-3 offset-md-4 border border-1 border-black card'>
                <img src={item.img} className='img-fluid' alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p> $ {item.price}</p>
                <p> Cantidad: {item.stock}</p>
                {goToCart ? <Link to='/cart'>Terminar compra</Link> : <ItemCount stock={10} initial={0} onAdd={onAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail