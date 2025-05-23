import "./ComoComprar.css";
import { FaBoxOpen, FaWhatsapp, FaTruck, FaCheckCircle } from "react-icons/fa";

function ComoComprar() {
  const pasos = [
    {
      icono: <FaBoxOpen className="paso-icono" />,
      titulo: "Elige tus productos",
      texto: "Navega por nuestras ofertas y selecciona lo que necesitas."
    },
    {
      icono: <FaWhatsapp className="paso-icono" />,
      titulo: "Escríbenos por WhatsApp",
      texto: "Confirma stock y detalles con nuestro equipo."
    },
    {
      icono: <FaTruck className="paso-icono" />,
      titulo: "Coordinamos el envío",
      texto: "Delivery gratis desde $10.000 o retiro en persona."
    },
    {
      icono: <FaCheckCircle className="paso-icono" />,
      titulo: "¡Listo!",
      texto: "Recibe tus productos y disfruta tu compra."
    }
  ];

  return (
    <section className="comprar-section" id="comprar">
      <div className="comprar-container">
        <h2 className="comprar-titulo">¿Cómo Comprar?</h2>
        <div className="comprar-grid">
          {pasos.map((paso, index) => (
            <div className="paso-card" key={index}>
              <span className="paso-numero">{index + 1}</span>
              {paso.icono}
              <h3 className="paso-titulo">{paso.titulo}</h3>
              <p className="paso-texto">{paso.texto}</p>
            </div>
          ))}
        </div>
        <a
          href="https://wa.me/56912345678"
          className="btn-contactar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiero comprar ahora
        </a>
      </div>
    </section>
  );
}

export default ComoComprar;
