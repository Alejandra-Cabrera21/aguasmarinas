import React, { useState } from "react";
import "../../css/styles.css"; // Asegúrate de que los estilos están correctamente enlazados

const Nosotros = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="nosotros-container">
      <h1 className="nosotros-text">Sobre Nosotros</h1>

      <div className="nosotros-section">
        <button className="accordion-buttonnosotros" onClick={() => toggleSection("mision")}>
          Misión
        </button>
        {activeSection === "mision" && (
          <div className="accordion-content">
            <p>
              Producir y comercializar sal de alta calidad,
cumpliendo con los estándares requeridos por
nuestros clientes. Preservamos el proceso artesanal
con estrictas normas de higiene y control de calidad,
aportando beneficios a la salud e innovando
constantemente para fortalecer nuestra marca.
            </p>
          </div>
        )}
      </div>

      <div className="nosotros-section">
        <button className="accordion-button" onClick={() => toggleSection("vision")}>
          Visión
        </button>
        {activeSection === "vision" && (
          <div className="accordion-content">
            <p>
              Ser la empresa salinera líder y más confiable del
mercado, destacando por nuestra excelencia
operativa, innovación y compromiso con la calidad.
Buscamos generar valor a nuestros clientes y
expandir nuestra presencia con productos y servicios
que satisfagan sus necesidades.
            </p>
            <p>
              Ser una empresa altamente consolidada en el mercado por nuestros productos de excelente calidad y buen servicio. Innovar continuamente sus procesos y productos, 
              con el fin de generar valor a sus clientes.
            </p>
          </div>
        )}
      </div>

      <div className="nosotros-section">
        <button className="accordion-button" onClick={() => toggleSection("valores")}>
          Valores
        </button>
        {activeSection === "valores" && (
          <div className="accordion-content">
            
            <ul>
              <li><strong>Calidad:</strong> Compromiso con la excelencia en cada producto.</li>
              <li><strong>Responsabilidad:</strong> Cumplimiento de normas de higiene y control de calidad.</li>
              <li><strong>Innovación:</strong> Desarrollo continuo de nuevos productos y mejoras en los procesos.</li>
              <li><strong>Liderazgo:</strong> Posicionamiento como la empresa salinera líder en Guatemala.</li>
              <li><strong>Compromiso con el cliente:</strong> Atención profesional y servicio excepcional.</li>
              <li><strong>Trabajo en equipo:</strong> Un grupo humano capacitado que impulsa el éxito de la empresa.</li>
              <li><strong>Sostenibilidad:</strong> Conservación del proceso artesanal y respeto por el medio ambiente.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="nosotros-section">
        <button className="accordion-button" onClick={() => toggleSection("historia")}>
          Nuestra Historia
        </button>
        {activeSection === "historia" && (
          <div className="accordion-content">
            <p>
              Con más de 30 años de trayectoria, nuestra empresa ha logrado consolidarse como un referente en la producción, comercialización y distribución de sal en Guatemala. 
              Desde sus inicios, se ha caracterizado por ofrecer productos de alta calidad, cumpliendo con los más estrictos estándares de higiene y control para garantizar la seguridad y bienestar de sus clientes.
            </p>
            <p>
              A lo largo del tiempo, hemos mantenido un firme compromiso con la innovación y mejora continua, desarrollando nuevos productos y fortaleciendo nuestra marca en el mercado. 
              Nuestro liderazgo no solo se debe a la preferencia de los consumidores, sino también a la capacidad de adaptación y evolución de nuestros procesos, asegurando siempre la excelencia operativa y el mejor servicio.
            </p>
            <p>
              Hoy, seguimos con la misma visión de crecimiento, buscando ser una empresa altamente consolidada en el mercado, ofreciendo productos fortificados con yodo para contribuir a la salud de la población, 
              mientras preservamos la tradición artesanal y promovemos el desarrollo sostenible.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nosotros;
