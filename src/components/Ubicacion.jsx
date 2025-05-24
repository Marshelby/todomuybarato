import "./Ubicacion.css";
import { FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

function Ubicacion() {
  return (
    <section className="ubicacion-section" id="ubicacion">
      <div className="ubicacion-container">
        <h2 className="ubicacion-titulo">¿Dónde estamos?</h2>
        <p className="ubicacion-subtitulo">
          Puedes retirar en nuestra bodega o coordinar por WhatsApp
        </p>

        <div className="ubicacion-grid">
          <div className="ubicacion-info">
            <p>
              <FaMapMarkerAlt className="ubicacion-icono" />
              <strong>Dirección:</strong> Av. Las Palmas 2108, Los Pinos, Quilpué
            </p>
            <p>
              <FaClock className="ubicacion-icono" />
              <strong>Horario:</strong> Lunes a Domingo, 10:00 a 20:00 hrs
            </p>
            <p>
              <FaWhatsapp className="ubicacion-icono" />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/56937711681"
                target="_blank"
                rel="noopener noreferrer"
              >
                +56 9 3771 1681
              </a>
            </p>
          </div>

          <div className="ubicacion-mapa">
            <iframe
              title="Ubicación Arte Elegante"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789!2d-71.2345678!3d-33.0456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sArte%20Elegante%20Barber%C3%ADa!5e0!3m2!1ses-419!2scl!4v1620000000000!5m2!1ses-419!2scl"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;
