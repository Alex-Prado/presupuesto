import React from "react";
import "./Carrito.css";
import Producto from "./Producto";
const Carrito = ({ carrito, MostrarCarrito}) => {
  return (
    <div className="carrito">
      <h2>DESDE TU CARRITO</h2>

      {carrito.length === 0 ? 
        <p>aun no hay productos</p>
       : 
        carrito.map((producto) => (
          <Producto 
            key            =  {producto.id}
            producto       =  {producto}
            carrito        =  {carrito}
            carrito        =  {carrito}
            MostrarCarrito =  {MostrarCarrito}
            />
        ))
      }
    </div>
  );
};

export default Carrito;
