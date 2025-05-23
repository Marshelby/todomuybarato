import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ofertas from './components/Ofertas';
import ComoComprar from './components/ComoComprar';
import Testimonios from './components/Testimonios';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />

      <div id="inicio" className="pt-20">
        <Hero />
      </div>
      <div id="ofertas">
        <Ofertas />
      </div>
      <div id="comprar">
        <ComoComprar />
      </div>
      <div id="opiniones">
        <Testimonios />
      </div>
      <Footer />
    </div>
  );
}

export default App;
