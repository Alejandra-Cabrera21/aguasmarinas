import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home"; // asegúrate que está importado
import Blog from "./pages/Blog";
import Tienda from "./pages/Tienda";
import Producto from "./components/Producto";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Muestra la página inicial */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/productos/sal-industrial" element={<Producto name="Sal Industrial" />} />
        <Route path="/productos/sal-blanca-yodada" element={<Producto name="Sal Blanca Yodada" />} />
        <Route path="/productos/sal-ganado" element={<Producto name="Sal de Ganado" />} />
        <Route path="/productos/sal-refinada-tipo-b" element={<Producto name="Sal Refinada Tipo B" />} />
        <Route path="/productos/sal-refinada-la-fina" element={<Producto name="Sal Refinada 'La Fina'" />} />
        <Route path="/productos/sal-yodada-artesana" element={<Producto name="Sal Yodada Artesana" />} />

        {/* Redirección para rutas no encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
