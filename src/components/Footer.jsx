import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false); // Para controlar la visibilidad del footer
  const scrollThreshold = 90; // Umbral para mostrar el footer cuando se está cerca del fondo (en píxeles)

  const handleScroll = () => {
    // Si el usuario está cerca de la parte inferior, muestra el pie de página
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - scrollThreshold) {
      setShowFooter(true); // Muestra el pie de página
    } else {
      setShowFooter(false); // Oculta el pie de página cuando no está al fondo
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      style={{
        width: "99vw", // Se asegura de que ocupe todo el ancho de la ventana
        textAlign: "center",
        backgroundColor: "#f8f6f6", // Color de fondo de la página
        padding: "10px 0",
        color: "#333", // Color del texto
        position: "relative", // El pie de página no es fijo
        bottom: 0,
        display: showFooter ? "block" : "none", // Controla la visibilidad del pie de página
        left: "0", // Asegura que esté alineado desde la izquierda
        right: "0", // Asegura que esté alineado hasta la derecha
      }}
    >
      <p>© 2025 AguasMarinas. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

