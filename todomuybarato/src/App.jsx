import Hero from './components/Hero';
import Ofertas from './components/Ofertas';
import ComoComprar from './components/ComoComprar';
import Testimonios from './components/Testimonios';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Ofertas />
      <ComoComprar />
      <Testimonios />
      <Footer />
    </div>
  );
}

export default App;
