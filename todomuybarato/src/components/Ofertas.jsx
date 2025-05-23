const productos = [
  { nombre: "Pack de Linternas", precio: "$3.990", imagen: "https://via.placeholder.com/150", stock: "15" },
  { nombre: "Jabón Líquido 5L", precio: "$2.490", imagen: "https://via.placeholder.com/150", stock: "30" },
  { nombre: "Set Herramientas Hogar", precio: "$6.990", imagen: "https://via.placeholder.com/150", stock: "10" },
  { nombre: "Pack 10 Mascarillas", precio: "$1.000", imagen: "https://via.placeholder.com/150", stock: "50" },
  { nombre: "Mopa Giratoria", precio: "$4.500", imagen: "https://via.placeholder.com/150", stock: "12" },
];

function Ofertas() {
  return (
    <section className="py-16 px-4 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Ofertas del Mes 🛒</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productos.map((producto, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold">{producto.nombre}</h3>
            <p className="text-lg text-green-600 font-bold">{producto.precio}</p>
            <p className="text-sm text-gray-500 mb-2">Stock: {producto.stock}</p>
            <a
              href="https://wa.me/56912345678"
              className="inline-block mt-2 bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-400"
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
