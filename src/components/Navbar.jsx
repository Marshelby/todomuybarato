function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl text-gray-800">Todomuybarato</span>
        <div className="space-x-4 text-sm sm:text-base">
          <a href="#inicio" className="text-gray-700 hover:text-yellow-500 transition">Inicio</a>
          <a href="#ofertas" className="text-gray-700 hover:text-yellow-500 transition">Ofertas</a>
          <a href="#comprar" className="text-gray-700 hover:text-yellow-500 transition">Comprar</a>
          <a href="#opiniones" className="text-gray-700 hover:text-yellow-500 transition">Opiniones</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
