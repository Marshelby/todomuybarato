import { useEffect, useState } from "react";
import "./BotonOfertas.css";
import { FaFire } from "react-icons/fa";

function BotonOfertas() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 200);
    };
    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const scrollToOfertas = () => {
    const seccion = document.getElementById("ofertas");
    if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
  };

  return (
    visible && (
      <button className="boton-ofertas" onClick={scrollToOfertas}>
        <FaFire className="icono-ofertas" />
        Ver Ofertas
      </button>
    )
  );
}

export default BotonOfertas;
