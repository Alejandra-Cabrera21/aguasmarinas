import React from "react";
import { useParams, Link } from "react-router-dom";

// Datos de los productos con sus presentaciones
const productos = {
  "sal-industrial": {
    nombre: "Sal Industrial",
    descripcion: "Sal de alta pureza utilizada en procesos industriales.",
    beneficios: "Usada en procesos químicos, alimentarios y farmacéuticos.",
    presentaciones: [
      { nombre: "Saco Sal Industrial 100lb", imagen: "/img/sal-industrial-100lb.jpg" },
    ],
  },
  "sal-blanca-yodada": {
    nombre: "Sal Blanca Yodada",
    descripcion: "Sal con yodo para prevenir problemas de tiroides.",
    beneficios: "Ayuda a prevenir el bocio y otros trastornos de la tiroides.",
    presentaciones: [
      { nombre: "Saco Sal Blanca Yodada 100lb", imagen: "/img/sal-blanca-yodada.jpg" },
      { nombre: "Fardo de Sal Presentación 350g", imagen: "/img/sal-blanca-350g.jpg" },
    ],
  },
  "sal-ganado": {
    nombre: "Sal de Ganado",
    descripcion: "Sal esencial para la nutrición y salud del ganado.",
    beneficios: "Mejora la digestión y la absorción de minerales en el ganado.",
    presentaciones: [
      { nombre: "Saco Sal de Ganado 100lb", imagen: "/img/sal-ganado.jpg" },
    ],
  },
  "sal-refinada-tipo-b": {
    nombre: "Sal Refinada Tipo B",
    descripcion: "Sal refinada de calidad premium para la cocina.",
    beneficios: "Ideal para sazonar alimentos con un toque gourmet.",
    presentaciones: [
      { nombre: "Saco Sal Refinada Tipo B 100lb", imagen: "/img/sal-refinada-b.jpg" },
    ],
  },
  "sal-refinada-la-fina": {
    nombre: "Sal Refinada La Fina",
    descripcion: "Sal importada de gran calidad y textura fina.",
    beneficios: "Perfecta para la cocina y uso industrial.",
    presentaciones: [
      { nombre: "Saco Sal Refinada La Fina 50kg", imagen: "/img/sal-la-fina.jpg" },
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const producto = productos[id];

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <h3>Beneficios</h3>
      <p>{producto.beneficios}</p>
      
      <h3>Presentaciones</h3>
      <div className="presentaciones">
        {producto.presentaciones.map((presentacion, index) => (
          <div key={index} className="presentacion">
            <img src={presentacion.imagen} alt={presentacion.nombre} />
            <p>{presentacion.nombre}</p>
            <a href={`https://wa.me/?text=Quiero%20cotizar%20${encodeURIComponent(presentacion.nombre)}`} className="button whatsapp">
              Cotizar por WhatsApp
            </a>
            <a href={`mailto:ventas@aguasmarinas.com?subject=Cotización%20${encodeURIComponent(presentacion.nombre)}`} className="button email">
              Cotizar por Correo
            </a>
          </div>
        ))}
      </div>

      <Link to="/tienda" className="button back">Regresar a la Tienda</Link>
    </div>
  );
};

export default ProductDetail;
