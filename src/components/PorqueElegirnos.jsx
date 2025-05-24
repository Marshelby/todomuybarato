import "./PorqueElegirnos.css";
import { FaShieldAlt, FaTruck, FaComments, FaDollarSign, FaUndo } from "react-icons/fa";

const beneficios = [
  {
    icono: <FaShieldAlt />, titulo: "Compra Segura", descripcion: "Tus datos y pagos están protegidos." },
  {
    icono: <FaTruck />, titulo: "Envío Rápido", descripcion: "Entregas en 24-48 hrs en la V Región." },
  {
    icono: <FaComments />, titulo: "Atención Directa", descripcion: "Te respondemos por WhatsApp al instante." },
  {
    icono: <FaDollarSign />, titulo: "Precios Muy Bajos", descripcion: "Somos importadores directos, sin intermediarios." },
  {
    icono: <FaUndo />, titulo: "Garantía de Cambio", descripcion: "Si no te gusta, puedes cambiarlo fácilmente." }
];

function PorqueElegirnos() {
  return (
    <section className="porque-section">
      <h2 className="porque-titulo">¿Por qué elegirnos?</h2>
      <p className="porque-subtitulo">Miles de clientes ya confían en nosotros. Tú también puedes hacerlo ✅</p>
      <div className="porque-grid">
        {beneficios.map((item, i) => (
          <div className="porque-card" key={i}>
            <div className="porque-icono">{item.icono}</div>
            <h3 className="porque-titulo-item">{item.titulo}</h3>
            <p className="porque-descripcion">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PorqueElegirnos;
