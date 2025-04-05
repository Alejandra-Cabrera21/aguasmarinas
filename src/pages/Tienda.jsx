import React, { useState } from "react";

const productos = [
  { nombre: "Sal Industrial", categorias: ["Saco"], url: "salindustrial.html" },
  { nombre: "Sal Blanca Yodada", categorias: ["Saco"], url: "salblancayodada.html" },
  { nombre: "Sal de Ganado", categorias: ["Saco"], url: "salganado.html" },
  { nombre: "Sal Refinada Tipo B", categorias: ["Saco"], url: "salrefinadatipob.html" },
  { nombre: "Sal Refinada 'La Fina'", categorias: ["Empacada", "Saco"], url: "salrefinadalafina.html" },
  { nombre: "Sal Yodada Artesana", categorias: ["Empacada"], url: "salyodadaartesana.html" }
];

const Tienda = () => {
  const [filtro, setFiltro] = useState("Todos");

  const productosFiltrados = filtro === "Todos"
    ? productos
    : productos.filter(p => p.categorias.includes(filtro));

  return (
    <div className="page-container">
      <h1>Nuestros Productos</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFiltro("Todos")} style={{ marginRight: "10px" }}>Todos</button>
        <button onClick={() => setFiltro("Empacada")} style={{ marginRight: "10px" }}>Sal Empacada</button>
        <button onClick={() => setFiltro("Saco")}>Sal de Saco</button>
      </div>
      <ul>
        {productosFiltrados.map((producto, index) => (
          <li key={index}>
            <h2
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "bold",
                fontSize: "21px",
                cursor: "pointer"
              }}
              onClick={() => {
              window.location.href = `${process.env.PUBLIC_URL || ''}/${producto.url}`;
            }}


            >
              {producto.nombre}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tienda;
