import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../../css/styles.css";
import logo from "../assets/logo.png"; // Este sí puede quedar como import si está en src/assets

const Home = () => {
  const base = import.meta.env.BASE_URL;

  const productosDestacados = [
    "sal-industrial.jpg",
    "sal-blanca-yodada.jpg",
    "sal-ganado.jpg",
    "refinada2.jpg",
    "sal-refinada-b.jpg"
  ];

  const beneficios = [
    { img: "purezaa.jpg", title: "Máxima Pureza", desc: "Garantizamos la más alta calidad en cada grano." },
    { img: "calidad.jpg", title: "Certificación de Calidad", desc: "Cumplimos con los estándares más exigentes." },
    { img: "ecologico.jpg", title: "Producción Ecológica", desc: "Un proceso amigable con el medio ambiente." },
    { img: "versatil.jpg", title: "Usos Versátiles", desc: "Ideal para múltiples aplicaciones industriales y gastronómicas." }
  ];

  return (
    <div className="blog-container">
      {/* Sección de Bienvenida */}
      <section className="hero">
        <div className="hero-content">
          <h1>La pureza de la naturaleza en cada grano</h1>
          <h4>Descubre nuestra variedad de sales de la más alta calidad.</h4>
          <Link to="/tienda" className="cta-button">Conoce nuestros productos</Link>
        </div>
      </section>

      {/* Sección de Productos Destacados */}
      <section className="productos-destacados">
        <h2>Productos Destacados</h2>
        <Swiper navigation={true} modules={[Navigation]} className="swiper-container-Home">
          {productosDestacados.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="productoDes">
                <img src={`${base}img/${img}`} alt="Producto Destacado" className="imagen-producto-destacado" />
                <Link to="/tienda" className="btn-detallehome">Ver más</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="sobre-nosotros">
        <h2>Sobre Nosotros</h2>
        <div className="nosotros-content">
          <img src={`${base}img/nosotros1.jpg`} alt="Nuestra Fábrica" />
          <p>Somos una empresa dedicada a la producción y comercialización de sal de alta pureza, con compromiso en la calidad y el medio ambiente.</p>
        </div>
      </section>

      {/* Sección Beneficios */}
      <section className="beneficios">
        <h2 className="beneficios-titulo">¿Por qué elegir nuestra sal?</h2>
        <div className="beneficios-container">
          {beneficios.map((b, index) => (
            <div className="beneficio-card" key={index}>
              <img src={`${base}img/${b.img}`} alt={b.title} className="beneficio-img" />
              <div className="beneficio-text">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
