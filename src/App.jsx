import Navbar from './components/Navbar';
import BarraAnuncio from './components/BarraAnuncio';
import Hero from './components/Hero';
import WaveSeparator from './components/WaveSeparator';
import Ofertas from './components/Ofertas';
import WaveSeparatorInvertido from './components/WaveSeparatorInvertido';
import Categorias from './components/Categorias';
import PorqueElegirnos from './components/PorqueElegirnos';
import ComoComprar from './components/ComoComprar';
import Ubicacion from './components/Ubicacion';
import QuienesSomos from './components/QuienesSomos';
import Testimonios from './components/Testimonios';
import ContactoFinal from './components/ContactoFinal';
import Footer from './components/Footer';
import BotonOfertas from './components/BotonOfertas';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <BarraAnuncio />

      {/* Espaciado preciso para evitar solapamiento con navbar + barra */}
      <div id="inicio" className="pt-[6.5rem]">
        <Hero />
      </div>

      <WaveSeparator />

      <div id="ofertas">
        <Ofertas />
      </div>

      <WaveSeparatorInvertido />

      <div id="categorias">
        <Categorias />
      </div>

      <div id="beneficios">
        <PorqueElegirnos />
      </div>

      <WaveSeparator />

      <div id="comprar">
        <ComoComprar />
      </div>

      <div id="ubicacion">
        <Ubicacion />
      </div>

      <div id="quienes">
        <QuienesSomos />
      </div>

      <div id="opiniones">
        <Testimonios />
      </div>

      <ContactoFinal />
      <BotonOfertas />
      <Footer />
    </div>
  );
}

export default App;
