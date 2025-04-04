import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Asegúrate de importar el logo

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Para controlar la dirección del scroll
  const [showNavbar, setShowNavbar] = useState(true); // Para controlar la visibilidad del navbar
  const scrollThreshold = 190; // Umbral para mostrar el navbar cuando se sube (en píxeles)

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setScrollingDown(true); // El usuario está bajando
      setShowNavbar(false); // Desaparece el navbar cuando se empieza a bajar
    } else if (window.scrollY < lastScrollY && window.scrollY < scrollThreshold) {
      // El usuario sube y está cerca de la parte superior
      setScrollingDown(false);
      setShowNavbar(true); // Muestra el navbar cuando se sube cerca de la parte superior
    }

    // Actualiza la posición del scroll
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={showNavbar ? "navbar" : "navbar hidden"}>
      <div className="logo-container">
        <img src={logo} alt="Logo de la empresa" className="logo" />
      </div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/tienda">Tienda</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
