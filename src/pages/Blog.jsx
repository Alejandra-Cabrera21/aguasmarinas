import React, { useState } from "react";
import "../../css/styles.css";

const Blog = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideos, setShowVideos] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0); // Estado para video actual


  const images = [
    "/img/salina1.jpg",
    "/img/salina2.jpg",
    "/img/salina3.jpg",
    "/img/salina4.jpg",
    "/img/salina5.jpg",
    "/img/salina6.jpg",
    "/img/salina7.jpg",
    "/img/salina8.jpg",
    "/img/salina9.jpg",
    "/img/salina10.jpg",
    "/img/salina11.jpg",
    "/img/salina12.jpg",
  ];
const videos = [
  "/videos/produccion1.mp4", 
  "/videos/produccion2.mp4", 
  "/videos/produccion3.mp4", 
  "/videos/produccion4.mp4", 
  "/videos/produccion5.mp4", 
  "/videos/produccion6.mp4", 
  "/videos/produccioon7.mp4", 
  "/videos/produccion8.mp4"
];




  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

const handlePrevVideo = () => {
  setCurrentVideo((prev) => {
    const newIndex = prev === 0 ? videos.length - 1 : prev - 1;
    console.log('Prev Video Index:', newIndex);  // Verificación
    return newIndex;
  });
};

const handleNextVideo = () => {
  setCurrentVideo((prev) => {
    const newIndex = prev === videos.length - 1 ? 0 : prev + 1;
    console.log('Next Video Index:', newIndex);  // Verificación
    return newIndex;
  });
};



  return (
    <div className="blog-container">
      <h1>Últimas noticias de AguasMarinas</h1>
      <p>Descubre los beneficios y usos de cada tipo de sal que ofrecemos.</p>

      {[
        {
          img: "/img/sal-industrial.jpg",
          alt: "Sal Industrial",
          title: "Sal Industrial",
          description:
            "La sal industrial es utilizada en múltiples aplicaciones como la fabricación de productos químicos, tratamiento de agua y conservación de alimentos. Su pureza es clave para procesos industriales eficientes.",
          link: "/productos/sal-industrial", // Ruta para "Ver en tienda"
        },
        {
          img: "/img/sal-blanca-yodada.jpg",
          alt: "Sal Blanca Yodada",
          title: "Sal Blanca Yodada",
          description:
            "La sal blanca yodada es ideal para el consumo humano, ya que previene problemas de tiroides y mejora la salud general. Es recomendada por organismos de salud para la alimentación diaria.",
          link: "/productos/sal-blanca-yodada", // Ruta para "Ver en tienda"
        },
        {
          img: "/img/sal-ganado.jpg",
          alt: "Sal de Ganado",
          title: "Sal de Ganado",
          description:
            "Esta sal es esencial para el bienestar y crecimiento del ganado, ya que ayuda en la digestión, mejora la absorción de nutrientes y previene deficiencias minerales en los animales.",
          link: "/productos/sal-ganado", // Ruta para "Ver en tienda"
        },
        {
          img: "/img/sal-blanca-yodada.jpg",
          alt: "Sal Refinada Tipo B",
          title: "Sal Refinada Tipo B",
          description:
            "Una opción perfecta para la cocina y la industria alimentaria, la Sal Refinada Tipo B ofrece un grano fino y alta pureza, asegurando calidad en la preparación de alimentos.",
          link: "/productos/sal-refinada-tipo-b", // Ruta para "Ver en tienda"
        },
        {
          img: "/img/sal-la-finaa.png",
          alt: "Sal Refinada La Fina",
          title: "Sal Refinada 'La Fina'",
          description:
            "Con una textura más fina y mayor solubilidad, esta sal es perfecta para la gastronomía y procesos donde se requiere una disolución rápida sin residuos.",
          link: "/productos/sal-refinada-la-fina", // Ruta para "Ver en tienda"
        },
      ].map((item, index) => (
        <div className="blog-section" key={index}>
          <img className="blogimg" src={item.img} alt={item.alt} />
          <div className="blog-text">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link}>
              <button className="view-store-button">Ver en Tienda</button>
            </a>
          </div>
        </div>
      ))}

      {/* Sección de Producción con Acordeón */}
      <div className="blog-section">
        <div className="blog-text">
          <h2>Proceso de Producción en Nuestras Salinas</h2>
          <p>
            La sal que ofrecemos proviene de salinas naturales donde el agua de mar se evapora lentamente, dejando cristales de sal pura. Este proceso ecológico garantiza un producto de alta calidad.
          </p>
          <button className="accordion-buttonblog" onClick={() => setShowGallery(!showGallery)}>
            {showGallery ? "Ocultar Imágenes" : "Ver Imágenes"}
          </button>
        </div>
      </div>

      {showGallery && (
        <div className="salina-gallery">
          <div className="salina-image-container">
            <button className="arrow-button" onClick={handlePrev}>←</button>
            <img className="salina-img" src={images[currentImage]} alt={`Salina ${currentImage + 1}`} />
            <button className="arrow-button" onClick={handleNext}>→</button>
          </div>
        </div>
      )}

      {/* Sección de Video */}
<div className="blog-section video-section">
  <h5>Videos del Proceso de Producción</h5>
  <div className="video-containerBLOG">
    <button className="arrow-buttonBLOG left-arrowBLOG" onClick={handlePrevVideo}>←</button>
    <div className="video-wrapper">
      <video key={currentVideo} width="100%" controls autoPlay muted loop>
        <source src={videos[currentVideo]} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
    <button className="arrow-buttonBLOG right-arrowBLOG" onClick={handleNextVideo}>→</button>
  </div>
</div>

      {/* Sección de Datos Curiosos */}
      <div className="blog-section curious-facts">
        <h5 className="curious-facts-title">Datos Curiosos</h5>
        <div className="curious-facts-container">
          <div className="curious-fact-box">
            <h3>Usos de la Sal</h3>
            <p>
              La sal tiene una variedad de usos, desde la conservación de alimentos hasta la fabricación de productos químicos. Es fundamental en la industria alimentaria, además de ser utilizada en el tratamiento de agua y en procesos industriales.
            </p>
          </div>
          <div className="curious-fact-box">
            <h3>Beneficios para la Salud</h3>
            <p>
              La sal es esencial para el equilibrio de los líquidos en el cuerpo y el buen funcionamiento de los nervios y músculos. La sal yodada es particularmente importante para prevenir problemas de tiroides.
            </p>
          </div>
          <div className="curious-fact-box">
            <h3>Proceso de Producción</h3>
            <p>
              El proceso de producción de la sal comienza con la recolección de agua de mar, que luego se deja evaporar en salinas naturales. Este proceso permite obtener cristales de sal pura que se utilizan en diferentes industrias y aplicaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
