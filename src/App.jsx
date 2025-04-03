import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Producto from "./components/Producto"; // Componente para mostrar el detalle del producto

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/productos/sal-industrial" element={<Producto name="Sal Industrial" />} />
        <Route path="/productos/sal-blanca-yodada" element={<Producto name="Sal Blanca Yodada" />} />
        <Route path="/productos/sal-ganado" element={<Producto name="Sal de Ganado" />} />
        <Route path="/productos/sal-refinada-b" element={<Producto name="Sal Refinada Tipo B" />} />
        <Route path="/productos/sal-la-fina" element={<Producto name="Sal Refinada 'La Fina'" />} />
      </Routes>
    </Router>
  );
};

export default App;
