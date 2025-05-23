function Testimonios() {
  const datos = [
    { nombre: "Carlos (Quilpué)", texto: "Compré 3 cosas y todo llegó en perfectas condiciones. Muy barato y confiable." },
    { nombre: "Ana (Villa Alemana)", texto: "Me encantó, productos útiles y baratos. Recomendado al 100%." },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Lo que dicen nuestros clientes 💬</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {datos.map((testimonio, i) => (
          <div key={i} className="border p-4 rounded shadow-sm bg-gray-50">
            <p className="text-gray-800 italic">“{testimonio.texto}”</p>
            <p className="text-right text-sm font-semibold mt-2">{testimonio.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonios;
