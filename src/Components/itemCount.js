import React from "react";
import { useState } from "react";

const ItemCount = ({ stockItems }) => {

    const [ counter, setCounter ] = useState(1);
    const [ stock, setStock ] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }

    }

    return (
        <div className="d-flex justify-content-between" id="itemcount">
        
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-dark" onClick={decrementarStock} >-</button>
                        <button type="button" className="btn btn-outline-dark">{counter} </button>
                        <button type="button" className="btn btn-outline-dark" onClick={incrementarStock} >+</button>
                    </div>
                </div>

                <div>
                    <button type="button" className="btn btn-outline-dark" >Agregar al carrito</button>
                </div>
        </div>
    )
}

export default ItemCount;