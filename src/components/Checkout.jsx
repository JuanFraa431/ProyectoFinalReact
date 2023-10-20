import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }


        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
                <Link className="btn btn-primary" to={`/`} style={{color:"black"}}>Volver al inicio</Link>
            </div>
        )
    }

return (
    <div className="containerFinalizar">
        <div className='formFinalizar'>
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <div className='botonComprar'>
                    <button className="enviar" type="submit">Comprar</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default Checkout