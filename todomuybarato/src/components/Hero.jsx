function Hero() {
  return (
    <section className="bg-yellow-300 text-gray-900 h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">¡TODO MUY BARATO!</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-xl">
        Productos con precios bajos todo el año. Stock limitado y entrega rápida.
      </p>
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
      >
        Escríbenos por WhatsApp
      </a>
    </section>
  );
}

export default Hero;
