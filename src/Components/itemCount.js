import React, { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {

    const [ count, setCount ] = useState(parseInt(initial));

    const incrementarStock = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrementarStock = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

    return (
        <div className="d-flex justify-content-between mb-2" id="itemcount">
        
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-dark" onClick={decrementarStock} >-</button>
                        <button type="button" className="btn btn-outline-dark">{count} </button>
                        <button type="button" className="btn btn-outline-dark" onClick={incrementarStock} >+</button>
                    </div>
                </div>

                <div>
                    <button type="button" className="btn btn-outline-dark" onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
        </div>
    )
}

export default ItemCount;