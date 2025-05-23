import "./Hero.css";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-container">
      <h1 className="hero-title">¡TODO MUY BARATO!</h1>
      <p className="hero-subtitle">
        Productos útiles a precios bajos durante todo el año. ¡Stock limitado y entrega rápida en tu ciudad!
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
    </section>
  );
}

export default Hero;
