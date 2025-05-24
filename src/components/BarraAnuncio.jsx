import { useEffect, useState } from "react";
import "./BarraAnuncio.css";
import { FaTimes } from "react-icons/fa";

function BarraAnuncio() {
  const [visible, setVisible] = useState(true);
  const mensajes = [
    "🚚 Envío gratis desde $100.000 en toda la V Región",
    "💰 Precios más bajos que en el supermercado",
    "⚡ Atención directa por WhatsApp",
    "📦 Productos nuevos cada semana"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % mensajes.length);
    }, 6000); // cambia cada 6 segundos

    return () => clearInterval(intervalo);
  }, []);

  if (!visible) return null;

  return (
    <div className="barra-anuncio">
      <div className="anuncio-contenido">
        <span className="mensaje-fijo">🔥 ¡Aprovecha hoy!</span>
        <span className="mensaje-rotativo">{mensajes[index]}</span>
      </div>
      <button className="anuncio-cerrar" onClick={() => setVisible(false)}>
        <FaTimes />
      </button>
    </div>
  );
}

export default BarraAnuncio;
