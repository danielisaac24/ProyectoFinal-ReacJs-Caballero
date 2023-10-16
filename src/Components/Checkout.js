import { useState } from 'react';
import { useCartContext } from './CartContext';

import {
    getFirestore,
    collection,
    addDoc,
    updateDoc,
    doc,
    getDoc,
} from 'firebase/firestore';
// ES6 Modules or TypeScript

// CommonJS


export const Checkout = () => {
    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ emailConfirmacion, setEmailConfirmacion ] = useState('');
    const [ error, setError ] = useState('');
    const [ ordenId, setOrdenId ] = useState('');
    const [ mensaje, setMensaje ] = useState('');

    const { cart, removeProduct, totalPrice } = useCartContext();

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Por favor completa todos los campos');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los campos de email no coinciden');
            return;
        }
        const total = totalPrice();
        const orden = {
            items: cart.map((producto) => ({
                id: producto.id,
                nombre: producto.title,
                cantidad: producto.quantity,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const db = getFirestore();
                const productoRef = doc(db, 'products', productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                const db = getFirestore();
                addDoc(collection(db, 'orders'), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        removeProduct();
                    })
                    .catch((error) => {
                        console.log('Error en creacon de orden', error);
                        setError('Error en orden');
                    });
            })
            .catch((error) => {
                console.log('No se puede actualizar el stock', error);
                setError('No se actualizo el stock');
            });

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailConfirmacion('');
        setMensaje('');
    };

    return (
        <>
            <h2 className="info">
                Finalizar la compra
            </h2>

            <form onSubmit={manejadorFormulario}>
                {cart.map((producto) => (
                    <div className="item-check" key={producto.id}>
                        <p>
                            {' '}
                            {producto.nombre}  {producto.cantidad}
                        </p>
                        <p>  {producto.precio} </p>

                    </div>
                ))}

                <div className="form-group row g-3 ">
                    <input className="form-control form-control-lg input-check" type="text" value={nombre} placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                    <input className="form-control form-control-lg input-check" type="text" value={apellido} placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
                    {/* <input className="form-control input-check" type="number" value={telefono} placeholder="Cod. Area" onChange={(e) => setTelefono(e.target.value)} /> */}
                    <input className="form-control form-control-lg input-check" type="number" value={telefono} placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="input-group mt-3 mb-3">
                        <input className="form-control form-control-lg input-check" type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>

                    <div className="input-group mb-3">
                        <input className="form-control form-control-lg input-check" type="email" value={emailConfirmacion} placeholder="Confirmacion de email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                {error && <p className="error-campos">{error}</p>} 

                {ordenId && (
                    <p className="orden">
                        ¡Gracias por tu compra! <br /> Este es tu numero de orden: <br />{' '}
                        {ordenId}{' '}
                    </p>
                )}
                    <button className="btn btn-outline-primary" type="submit">
                        Finalizar Compra
                    </button>
            </form>
        </>
    );
};
