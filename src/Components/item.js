import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id} className='text-decoration-none'>
                <div className='container mt-3 p-2  h-100'>
                    <div className='card border border-1 border-dark h-100'>
                        <img src={item.img} alt={item.title} />
                        <div className='card-body text-center'>
                            <h6 className='card-text'>{item.title}</h6>
                        </div>
                    </div>
                </div>
        </Link>
    )
}

export default Item;