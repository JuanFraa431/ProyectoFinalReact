import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
        <button type="button" className="btn btn-secondary carrito" data-bs-toggle="modal" data-bs-target="#exampleModal" to="/carrito">
                <i className="fa-solid fa-cart-shopping fa-beat fa-lg"></i> 
                <span className="badge numerito" id="notificacion">{cantidadEnCarrito()}</span>
            </button>
        </Link>
    </div>
  )
}

export default CartWidget

