import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-links">
          <a href="#inicio">Inicio</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#comprar">Comprar</a>
          <a href="#opiniones">Opiniones</a>
        </div>

        <div className="navbar-logo">
          <span>Todomuybarato</span>
        </div>

        <div className="navbar-cta">
          <a href="#ofertas" className="cta-button">Ver Ofertas</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
