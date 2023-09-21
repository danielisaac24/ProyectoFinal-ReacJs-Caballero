import React from 'react'
import ItemCount from './itemCount';
const ItemDetail = ({ item }) => {
    return (
        <div className='row mt-2'>
            <div className='col-md-4 offset-md-4'>
                <img src={item.imagen} className='img-fluid' alt={item.nombre} />
                <h2>{item.nombre}</h2>
                <p>{item.descripcion}</p>
                <strong> $ {item.precio}</strong>
                <p> Stock: {item.stock}</p>
                <ItemCount stockItems={10} />
            </div>
        </div>
    )
}

export default ItemDetail