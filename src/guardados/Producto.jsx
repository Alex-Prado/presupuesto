import React from "react";
const Producto = ({ producto, productos, carrito, MostrarCarrito }) => {
  const { id, nombre, precio } = producto;

  const GuardarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    MostrarCarrito([...carrito, producto]);
  };
  const EliminarProducto = id => {
      const producto = carrito.filter(producto => producto.id !== id);
      MostrarCarrito(producto);
  }

  return (
    <div>
      <p>{nombre}</p>
      <p>{precio}</p>
      {productos ? 
        <button onClick={() => GuardarProducto(id)}>comprar</button>
       : 
        <button onClick={() => EliminarProducto(id)}>eliminar</button>
      }
    </div>
  );
};

export default Producto;
