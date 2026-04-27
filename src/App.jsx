import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import MaterialShowcase from './components/MaterialShowcase';
import Katalog from './components/Katalog';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <MaterialShowcase />
        <Katalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
