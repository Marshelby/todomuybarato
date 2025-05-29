import "./Navbar.css";

function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-links izquierda">
          <button onClick={() => handleScroll("inicio")}>Inicio</button>
          <span className="navbar-separator">|</span>
          <button onClick={() => handleScroll("ofertas")}>Ofertas</button>
          <span className="navbar-separator">|</span>
          <button onClick={() => handleScroll("beneficios")}>Beneficios</button>
        </div>

        <div className="navbar-logo">
          <span>Todomuybarato</span>
        </div>

        <div className="navbar-links derecha">
          <button onClick={() => handleScroll("comprar")}>Comprar</button>
          <span className="navbar-separator">|</span>
          <button onClick={() => handleScroll("ubicacion")}>Ubicación</button>
          <span className="navbar-separator">|</span>
          <button onClick={() => handleScroll("quienes")}>Nosotros</button>
          <span className="navbar-separator">|</span>
          <button onClick={() => handleScroll("opiniones")}>Opiniones</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
