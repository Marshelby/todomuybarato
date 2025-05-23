import "./Ofertas.css";
import { FaShoppingCart } from "react-icons/fa";

const productos = [
  {
    nombre: "Pack de Linternas",
    precio: "$3.990",
    imagen: "https://via.placeholder.com/250x160?text=Linternas",
    stock: "15",
  },
  {
    nombre: "Jabón Líquido 5L",
    precio: "$2.490",
    imagen: "https://via.placeholder.com/250x160?text=Jab%C3%B3n+5L",
    stock: "30",
  },
  {
    nombre: "Set Herramientas Hogar",
    precio: "$6.990",
    imagen: "https://via.placeholder.com/250x160?text=Herramientas",
    stock: "10",
  },
  {
    nombre: "Pack 10 Mascarillas",
    precio: "$1.000",
    imagen: "https://via.placeholder.com/250x160?text=Mascarillas",
    stock: "50",
  },
  {
    nombre: "Mopa Giratoria",
    precio: "$4.500",
    imagen: "https://via.placeholder.com/250x160?text=Mopa",
    stock: "12",
  },
];

function Ofertas() {
  return (
    <section className="ofertas-section" id="ofertas">
      <h2 className="ofertas-title">
        Ofertas del Mes <FaShoppingCart className="inline-icon" />
      </h2>
      <p className="ofertas-subtitle">
        Aprovecha estas promociones exclusivas por tiempo limitado 🔥
      </p>

      <div className="ofertas-grid">
        {productos.map((producto, index) => (
          <div key={index} className="oferta-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="oferta-img"
            />
            <h3 className="oferta-nombre">{producto.nombre}</h3>
            <span className="oferta-precio">{producto.precio}</span>
            <p className="oferta-stock">Stock: {producto.stock}</p>
            <a
              href="https://wa.me/56912345678"
              className="oferta-boton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaShoppingCart className="boton-icon" /> Comprar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ofertas;
