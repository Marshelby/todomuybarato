import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-yellow-200 text-gray-900 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        ¡TODO MUY BARATO!
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-800">
        Productos útiles a precios bajos durante todo el año. ¡Stock limitado y entrega rápida en tu ciudad!
      </p>
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition shadow-lg"
      >
        <FaWhatsapp className="text-xl" />
        Escríbenos por WhatsApp
      </a>
    </section>
  );
}

export default Hero;
