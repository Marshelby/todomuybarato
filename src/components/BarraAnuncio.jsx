import { useState } from "react";
import "./BarraAnuncio.css";
import { FaTruck, FaTimes } from "react-icons/fa";

function BarraAnuncio() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="barra-anuncio">
      <div className="anuncio-contenido">
        <FaTruck className="anuncio-icono" />
        <span>
          🚚 Envío gratis desde $100.000 en toda la V Región – ¡Aprovecha hoy!
        </span>
      </div>
      <button className="anuncio-cerrar" onClick={() => setVisible(false)}>
        <FaTimes />
      </button>
    </div>
  );
}

export default BarraAnuncio;
