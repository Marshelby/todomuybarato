import "./ContactoFinal.css";
import { FaWhatsapp } from "react-icons/fa";

function ContactoFinal() {
  return (
    <section className="contacto-section">
      <div className="contacto-container">
        <h2 className="contacto-titulo">¿Listo para comprar fácil y barato? 💸</h2>
        <p className="contacto-subtitulo">
          Escríbenos directamente por WhatsApp y te ayudamos al instante 🚀
        </p>
        <a
          href="https://wa.me/56912345678"
          className="contacto-boton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="contacto-icono" /> Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ContactoFinal;
