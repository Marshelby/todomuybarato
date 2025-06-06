import "./Hero.css";
import { FaWhatsapp } from "react-icons/fa";
import logoHero from "../assets/logo-hero.png";
import { useEffect, useState } from "react";

function Hero() {
  const frases = [
    "Precios bajos todos los días 💸",
    "Entrega rápida garantizada 🚚",
    "Productos útiles para tu hogar 🏡",
    "+500 clientes felices 🧡",
    "Compra segura y rápida 🛒",
    "Atención directa por WhatsApp 📱",
  ];
  const [fraseActual, setFraseActual] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setFraseActual((prev) => (prev + 1) % frases.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">¡TODO MUY BARATO!</h1>
            <p className="hero-subtitle">
              Encuentra lo que necesitas a precios bajos todo el año.{" "}
              <strong>Stock limitado</strong> y{" "}
              <strong>entrega rápida</strong> en la Quinta Región.
            </p>
            <div className="frase-wrapper">
              <div className={`frase-rotativa ${fade ? "fade-in" : "fade-out"}`}>
                {frases[fraseActual]}
              </div>
            </div>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
            >
              <FaWhatsapp className="hero-icon" />
              Habla con nosotros por WhatsApp
            </a>
            <p className="hero-slogan">
              🎯 Confianza, rapidez y precios bajos todos los días
            </p>
            <div className="hero-sello">🛡️ +500 clientes felices</div>
          </div>
          <div className="hero-image">
            <img
              src={logoHero}
              alt="Logo Todo Muy Barato"
              className="hero-float"
            />
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </>
  );
}

export default Hero;
