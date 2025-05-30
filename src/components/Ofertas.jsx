import "./Ofertas.css";
import { FaShoppingCart } from "react-icons/fa";

const productos = [
  {
    nombre: "Parche Adelgazante",
    precio: "$1.000 la unidad / $500 por mayor",
    imagen: "/assets/parche.png",
    stock: "40",
  },
  {
    nombre: "Alargador con Soquete",
    precio: "$1.000 la unidad / $800 por mayor",
    imagen: "/assets/alargadorfinal.png",
    stock: "30",
  },
  {
    nombre: "Panel de Luz 6W",
    precio: "$1.000 la unidad / $800 por mayor",
    imagen: "/assets/panelfinal.png",
    stock: "0",
  },
  {
    nombre: "Tostador Metálico",
    precio: "$1.500 la unidad / $1.000 por mayor",
    imagen: "/assets/tostadorfinal.png",
    stock: "20",
  },
];

function Ofertas() {
  return (
    <section className="ofertas-section" id="ofertas">
      <h2 className="ofertas-title">
        <FaShoppingCart className="inline-icon" /> Ofertas del Mes
      </h2>
      <p className="ofertas-subtitle">
        Stock limitado. Se actualizan cada semana. ¡Aprovecha antes de que se agoten! 🔥
      </p>

      <div className="ofertas-grid">
        {productos.map((producto, index) => {
          const stockDisponible = parseInt(producto.stock) > 0;
          return (
            <div key={index} className="oferta-card">
              <div className="oferta-img-container">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="oferta-img"
                />
              </div>
              <h3 className="oferta-nombre">{producto.nombre}</h3>
              <p
                className={`oferta-stock ${
                  stockDisponible ? "stock-disponible" : "stock-agotado"
                }`}
              >
                Stock: {stockDisponible ? "Disponible" : "Agotado"}
              </p>
              <a
                href="https://wa.me/56912345678"
                className="oferta-boton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaShoppingCart className="boton-icon" /> Lo quiero
              </a>
              <div className="oferta-precio-final">{producto.precio}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Ofertas;
