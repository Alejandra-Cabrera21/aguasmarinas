import React from "react";
import { useParams } from "react-router-dom";

const productos = {
  1: { nombre: "Sal Industrial", descripcion: "Sal de alta pureza.", imagen: "/img/sal-industrial.jpg" },
  2: { nombre: "Sal de Ganado", descripcion: "Esencial para la salud del ganado.", imagen: "/img/sal-ganado.jpg" },
};

const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = productos[id];

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <img src={producto.imagen} alt={producto.nombre} />
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <h3>Presentaciones:</h3>
      <ul>
        <li>Libra</li>
        <li>Arroba</li>
        <li>Quintal</li>
      </ul>
      <button onClick={() => window.open("https://wa.me/?text=Quiero%20cotizar%20" + producto.nombre)}>
        Cotizar por WhatsApp
      </button>
      <button onClick={() => window.location.href = "mailto:ventas@aguasmarinas.com?subject=Cotización " + producto.nombre}>
        Cotizar por Correo
      </button>
    </div>
  );
};

export default ProductoDetalle;