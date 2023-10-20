import React from 'react'
import { Link } from 'react-router-dom'


const Item = ( {producto} ) => {
  return (
    <div className="card edit" style={{ width:"18rem", height:"450px", marginBottom:"15px", backgroundColor:"white"}}>
    <img src={producto.imagen} className="card-img-top" style={{ width:"286px", height:"250px"}} alt={producto.descripcion}/>
      <div className="card-body" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <h6 className="card-title">{producto.nombre}</h6>
        <p className="card-text" style={{fontSize:"12px"}}>{(producto.descripcion)}</p>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <Link href="#" className="btn btn-primary" ><Link to={`/item/${producto.id}`} style={{color:"black"}}>Ver detalle</Link></Link>
          <p>Precio: ${producto.precio}</p>
        </div>
      </div>
  </div>
  )
}

export default Item


