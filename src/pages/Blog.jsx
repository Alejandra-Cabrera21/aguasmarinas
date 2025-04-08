import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/styles.css";

const Blog = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  const base = import.meta.env.BASE_URL;
  const isMobile = window.innerWidth <= 600;

  const images = [
    "salina1.jpg", "salina2.jpg", "salina3.jpg", "salina4.jpg",
    "salina5.jpg", "salina6.jpg", "salina7.jpg", "salina8.jpg",
    "salina9.jpg", "salina10.jpg", "salina11.jpg", "salina12.jpg"
  ].map(img => base + "img/" + img);

  const videos = [
    "produccion1.mp4", "produccion2.mp4", "produccion3.mp4",
    "produccion4.mp4", "produccion5.mp4", "produccion6.mp4",
    "produccioon7.mp4", "produccion8.mp4"
  ].map(v => base + "videos/" + v);

  const productos = [
    { img: "salindustrial.jpg", alt: "Sal Industrial", title: "Sal Industrial", desc: "La sal industrial es utilizada en múltiples aplicaciones...", url: "salindustrial.html" },
    { img: "salblancayodada.jpg", alt: "Sal Blanca Yodada", title: "Sal Blanca Yodada", desc: "La sal blanca yodada es ideal para el consumo humano...", url: "salblancayodada.html" },
    { img: "salganado.jpg", alt: "Sal de Ganado", title: "Sal de Ganado", desc: "Esta sal es esencial para el bienestar del ganado...", url: "salganado.html" },
    { img: "salrefinadab.jpg", alt: "Sal Refinada Tipo B", title: "Sal Refinada Tipo B", desc: "Una opción perfecta para cocina e industria...", url: "salrefinadatipob.html" },
    { img: "sal-la-finaa.png", alt: "Sal Refinada La Fina", title: "Sal Refinada 'La Fina'", desc: "Con una textura más fina y mayor solubilidad...", url: "salrefinadalafina.html"},
  ];

  return (
    <div className="blog-container">
      <h1>Últimas noticias de AguasMarinas</h1>
      <p>Descubre los beneficios y usos de cada tipo de sal que ofrecemos.</p>

      {productos.map((item, index) => (
        <div className="blog-section" key={index}>
          <img className="blogimg" src={base + "img/" + item.img} alt={item.alt} />
          <div className="blog-text">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={`/AguasMarinas/${item.url}`} className="view-store-button">
              Ver en Tienda
            </a>
          </div>
        </div>
      ))}

      <div className="blog-section">
        <div className="blog-text">
          <h2>Proceso de Producción en Nuestras Salinas</h2>
          <button
            className="accordion-buttonblog"
            onClick={() => setShowGallery(!showGallery)}
          >
            {showGallery ? "Ocultar Imágenes" : "Ver Imágenes"}
          </button>
        </div>
      </div>

      {showGallery && (
        <div className="salina-gallery">
          <div className="salina-image-container">
            <button
              className="arrow-button"
              onClick={() =>
                setCurrentImage((currentImage - 1 + images.length) % images.length)
              }
            >
              ←
            </button>
            <img
              className="salina-img"
              src={images[currentImage]}
              alt={`Salina ${currentImage + 1}`}
            />
            <button
              className="arrow-button"
              onClick={() => setCurrentImage((currentImage + 1) % images.length)}
            >
              →
            </button>
          </div>
        </div>
      )}

      <div className="blog-section video-section">
        <h5>Videos del Proceso de Producción</h5>
        <div className="video-containerBLOG">
          <button
            className="arrow-buttonBLOG left-arrowBLOG"
            onClick={() =>
              setCurrentVideo((currentVideo - 1 + videos.length) % videos.length)
            }
          >
            ←
          </button>
          <div className="video-wrapper">
            <video
              key={currentVideo}
              width="100%"
              controls
              muted
              loop
              playsInline
              autoPlay={!isMobile}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
          <button
            className="arrow-buttonBLOG right-arrowBLOG"
            onClick={() =>
              setCurrentVideo((currentVideo + 1) % videos.length)
            }
          >
            →
          </button>
        </div>
      </div>

      <div className="blog-section curious-facts">
        <h5 className="curious-facts-title">Datos Curiosos</h5>
        <div className="curious-facts-container">
          <div className="curious-fact-box">
            <h3>Usos de la Sal</h3>
            <p>
              La sal tiene una variedad de usos, desde la conservación de alimentos hasta la fabricación de productos químicos...
            </p>
          </div>
          <div className="curious-fact-box">
            <h3>Beneficios para la Salud</h3>
            <p>
              La sal es esencial para el equilibrio de los líquidos en el cuerpo y el buen funcionamiento de los nervios y músculos...
            </p>
          </div>
          <div className="curious-fact-box">
            <h3>Proceso de Producción</h3>
            <p>
              El proceso de producción de la sal comienza con la recolección de agua de mar, que luego se deja evaporar en salinas naturales...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
