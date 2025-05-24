import "./Testimonios.css";
import { useEffect, useState } from "react";

const testimonios = [
  {
    nombre: "Carlos, Quilpué",
    texto: "Compré 3 cosas y todo llegó en perfectas condiciones. Muy barato y confiable.",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nombre: "Ana, Villa Alemana",
    texto: "Me encantó, productos útiles y baratos. Recomendado al 100%.",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nombre: "Marcela, Viña del Mar",
    texto: "El envío fue súper rápido y la atención excelente. Ya soy clienta fija.",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    nombre: "Eduardo, Limache",
    texto: "Todo barato, buena calidad, y te responden al tiro. Lo recomiendo.",
    foto: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

function Testimonios() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonios-section" id="opiniones">
      <h2 className="testimonios-titulo">Lo que dicen nuestros clientes 💬</h2>
      <div className="testimonios-slider">
        {testimonios.map((item, index) => (
          <div
            key={index}
            className={`testimonio-card ${index === actual ? "activo" : ""}`}
          >
            <img src={item.foto} alt={item.nombre} className="testimonio-foto" />
            <p className="testimonio-texto">“{item.texto}”</p>
            <p className="testimonio-nombre">{item.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonios;
