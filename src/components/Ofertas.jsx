import "./Ofertas.css";
import { FaShoppingCart } from "react-icons/fa";

const productos = [
  { nombre: "Pack de Linternas", precio: "$3.990", imagen: "https://via.placeholder.com/150", stock: "15" },
  { nombre: "Jabón Líquido 5L", precio: "$2.490", imagen: "https://via.placeholder.com/150", stock: "30" },
  { nombre: "Set Herramientas Hogar", precio: "$6.990", imagen: "https://via.placeholder.com/150", stock: "10" },
  { nombre: "Pack 10 Mascarillas", precio: "$1.000", imagen: "https://via.placeholder.com/150", stock: "50" },
  { nombre: "Mopa Giratoria", precio: "$4.500", imagen: "https://via.placeholder.com/150", stock: "12" },
];

function Ofertas() {
  return (
    <section className="ofertas-section" id="ofertas">
      <h2 className="ofertas-title">
        Ofertas del Mes <FaShoppingCart className="inline ml-2 text-yellow-500" />
      </h2>
      <div className="ofertas-grid">
        {productos.map((producto, index) => (
          <div key={index} className="oferta-card">
            <img src={producto.imagen} alt={producto.nombre} className="oferta-img" />
            <h3 className="oferta-nombre">{producto.nombre}</h3>
            <p className="oferta-precio">{producto.precio}</p>
            <p className="oferta-stock">Stock: {producto.stock}</p>
            <a
              href="https://wa.me/56912345678"
              className="oferta-boton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ofertas;
