import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id} className='text-decoration-none'>
                <div className='container p-2 h-100'>
                    <div className='card border border-1 h-100'>
                        <img src={item.imagen} className='card-img-bottom' alt={item.nombre} />
                        <div className='card-body text-center'>
                            <p className='card-text'>{item.nombre}</p>
                        </div>
                    </div>
                </div>
        </Link>
    )
}

export default Item;