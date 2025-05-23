import "./QuienesSomos.css";
import { FaHandshake } from "react-icons/fa";

function QuienesSomos() {
  return (
    <section className="quienes-section" id="quienes">
      <div className="quienes-container">
        <FaHandshake className="quienes-icon" />
        <h2 className="quienes-title">¿Quiénes somos?</h2>
        <p className="quienes-text">
          Somos una tienda independiente comprometida con ofrecer productos útiles y accesibles para todos. Trabajamos día a día para acercarte calidad, buenos precios y atención personalizada.
        </p>
      </div>
    </section>
  );
}

export default QuienesSomos;
