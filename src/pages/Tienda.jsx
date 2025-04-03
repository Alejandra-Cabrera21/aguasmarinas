import React, { useState } from "react";

const productos = [
  { nombre: "Sal Industrial", categorias: ["Saco"], url: "/productos/sal-industrial" },
  { nombre: "Sal Blanca Yodada", categorias: ["Saco"], url: "/productos/sal-blanca-yodada" },
  { nombre: "Sal de Ganado", categorias: ["Saco"], url: "/productos/sal-ganado" },
  { nombre: "Sal Refinada Tipo B", categorias: ["Saco"], url: "/productos/sal-refinada-tipo-b" },
  { nombre: "Sal Refinada 'La Fina'", categorias: ["Empacada", "Saco"], url: "/productos/sal-refinada-la-fina" },
  { nombre: "Sal Yodada Artesana", categorias: ["Empacada"], url: "/productos/sal-yodada-artesana" }
];

const Tienda = () => {
  const [filtro, setFiltro] = useState("Todos");

  // Filtrar los productos según las categorías
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
            <h2>
              <a href={producto.url} style={{ textDecoration: "none", color: "inherit", fontWeight: "bold", fontSize: "21px" }}>
                {producto.nombre}
              </a>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tienda;
