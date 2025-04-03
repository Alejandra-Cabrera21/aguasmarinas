import React from "react";
import { Link } from "react-router-dom";

// Datos de los productos
const productos = [
  {
    id: "sal-industrial",
    nombre: "Sal Industrial",
    descripcion: "Sal de alta pureza utilizada en procesos industriales.",
    imagen: "/img/sal-industrial-100lb.jpg",
  },
  {
    id: "sal-blanca-yodada",
    nombre: "Sal Blanca Yodada",
    descripcion: "Sal con yodo para prevenir problemas de tiroides.",
    imagen: "/img/sal-blanca-yodada.jpg",
  },
  {
    id: "sal-ganado",
    nombre: "Sal de Ganado",
    descripcion: "Sal esencial para la nutrición y salud del ganado.",
    imagen: "/img/sal-ganado.jpg",
  },
  {
    id: "sal-refinada-tipo-b",
    nombre: "Sal Refinada Tipo B",
    descripcion: "Sal refinada de calidad premium para la cocina.",
    imagen: "/img/sal-refinada-b.jpg",
  },
  {
    id: "sal-refinada-la-fina",
    nombre: "Sal Refinada La Fina",
    descripcion: "Sal importada de gran calidad y textura fina.",
    imagen: "/img/sal-la-fina.jpg",
  },
];

const Tienda = () => {
  return (
    <div>
      <h1>Nuestros Productos</h1>
      <div className="productos-container">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <Link to={`/productos/${producto.id}`} className="button">
              Más información
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tienda;
