import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Crane from './components/Crane';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Crane />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;