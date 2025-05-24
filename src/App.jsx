import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaveSeparator from './components/WaveSeparator';
import Ofertas from './components/Ofertas';
import WaveSeparatorInvertido from './components/WaveSeparatorInvertido';
import Categorias from './components/Categorias';
import PorqueElegirnos from './components/PorqueElegirnos';
import ComoComprar from './components/ComoComprar';
import QuienesSomos from './components/QuienesSomos';
import Testimonios from './components/Testimonios';
import ContactoFinal from './components/ContactoFinal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />

      <div id="inicio" className="pt-20">
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

      <div id="quienes">
        <QuienesSomos />
      </div>

      <div id="opiniones">
        <Testimonios />
      </div>

      <ContactoFinal />

      <Footer />
    </div>
  );
}

export default App;
