import "./Hero.css";
import { FaWhatsapp } from "react-icons/fa";
import ilustracion from "../assets/hero-ilustracion.png";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">¡TODO MUY BARATO!</h1>
          <p className="hero-subtitle">
            Productos útiles a precios bajos todo el año. Stock limitado y entrega rápida en la Quinta Región.
          </p>
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            <FaWhatsapp className="hero-icon" />
            Escríbenos por WhatsApp
          </a>
          <p className="hero-slogan">
            Confianza, rapidez y precios bajos todos los días 🛒
          </p>
        </div>
        <div className="hero-image">
          <img src={ilustracion} alt="Productos económicos" className="hero-float" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
