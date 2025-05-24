import "./Categorias.css";
import { FaBroom, FaLightbulb, FaTools, FaMobileAlt, FaUtensils } from "react-icons/fa";
import { useState } from "react";

const categorias = [
  { nombre: "Limpieza", icono: <FaBroom />, color: "#f97316" },
  { nombre: "Linternas", icono: <FaLightbulb />, color: "#facc15" },
  { nombre: "Herramientas", icono: <FaTools />, color: "#10b981" },
  { nombre: "Tecnología", icono: <FaMobileAlt />, color: "#3b82f6" },
  { nombre: "Cocina", icono: <FaUtensils />, color: "#ec4899" },
];

function Categorias() {
  const [seleccionada, setSeleccionada] = useState(null);

  return (
    <section className="categorias-section" id="categorias">
      <h2 className="categorias-titulo">Categorías de Productos</h2>
      <p className="categorias-subtitulo">Haz clic para ver los productos según tu interés 👇</p>

      <div className="categorias-grid">
        {categorias.map((cat, index) => (
          <div
            key={index}
            className={`categoria-card ${seleccionada === cat.nombre ? "activa" : ""}`}
            style={{ borderColor: cat.color }}
            onClick={() => setSeleccionada(cat.nombre)}
          >
            <div className="categoria-icono" style={{ color: cat.color }}>
              {cat.icono}
            </div>
            <span className="categoria-nombre">{cat.nombre}</span>
          </div>
        ))}
      </div>

      {seleccionada && (
        <div className="categoria-filtrada">
          Mostrando productos de: <strong>{seleccionada}</strong>
        </div>
      )}
    </section>
  );
}

export default Categorias;
