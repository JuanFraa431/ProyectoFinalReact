import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

return (
    <div className="containerCheckout">
        <div className='EditarItem'>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <img src={prod.imagen} alt="" style={{width:"10rem"}}/>
                        <h3>{prod.nombre}</h3>
                        <p>Precio unit: ${prod.precio}</p>
                        <p>Precio total:${Math.round(prod.precio * prod.cantidad)}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            {  
                carrito.length > 0 ?
                <>
                    <h2 className='TotalPrecio'>PRECIO TOTAL: ${Math.round(precioTotal())}</h2>
                    <div className='ContenedorBotones'>
                        <button onClick={handleVaciar} className='btn btn-danger'>Vaciar Carrito</button>
                        <Link to="/checkout" ><button onClick={handleVaciar} className='btn btn-success'>Procesar compra</button></Link>
                    </div>
                    
                </> :
                <h2>El carrito está vacío :(</h2>
            }
        </div>
    </div>
)
}

export default Carrito