import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/styles.css";

const Blog = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  const base = import.meta.env.BASE_URL;
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
    { img: "sal-industrial.jpg", alt: "Sal Industrial", title: "Sal Industrial", desc: "La sal industrial...", link: "/productos/sal-industrial" },
    { img: "sal-blanca-yodada.jpg", alt: "Sal Blanca Yodada", title: "Sal Blanca Yodada", desc: "La sal blanca yodada...", link: "/productos/sal-blanca-yodada" },
    { img: "sal-ganado.jpg", alt: "Sal de Ganado", title: "Sal de Ganado", desc: "Esta sal es esencial...", link: "/productos/sal-ganado" },
    { img: "sal-blanca-yodada.jpg", alt: "Sal Refinada Tipo B", title: "Sal Refinada Tipo B", desc: "Una opción perfecta...", link: "/productos/sal-refinada-tipo-b" },
    { img: "sal-la-finaa.png", alt: "Sal Refinada La Fina", title: "Sal Refinada 'La Fina'", desc: "Con una textura más fina...", link: "/productos/sal-refinada-la-fina" },
  ];

  return (
    <div className="blog-container">
      <h1>Últimas noticias de AguasMarinas</h1>
      <p>Descubre los beneficios...</p>

      {productos.map((item, index) => (
        <div className="blog-section" key={index}>
          <img className="blogimg" src={base + "img/" + item.img} alt={item.alt} />
          <div className="blog-text">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Link to={item.link}><button className="view-store-button">Ver en Tienda</button></Link>
          </div>
        </div>
      ))}

      <div className="blog-section">
        <div className="blog-text">
          <h2>Proceso de Producción...</h2>
          <button onClick={() => setShowGallery(!showGallery)}>
            {showGallery ? "Ocultar Imágenes" : "Ver Imágenes"}
          </button>
        </div>
      </div>

      {showGallery && (
        <div className="salina-gallery">
          <div className="salina-image-container">
            <button onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}>←</button>
            <img className="salina-img" src={images[currentImage]} alt="Salina" />
            <button onClick={() => setCurrentImage((currentImage + 1) % images.length)}>→</button>
          </div>
        </div>
      )}

      <div className="blog-section video-section">
        <h5>Videos del Proceso...</h5>
        <div className="video-containerBLOG">
          <button onClick={() => setCurrentVideo((currentVideo - 1 + videos.length) % videos.length)}>←</button>
          <video key={currentVideo} width="100%" controls autoPlay muted loop>
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>
          <button onClick={() => setCurrentVideo((currentVideo + 1) % videos.length)}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
