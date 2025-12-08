import { useEffect } from 'react';
import Background3D from './components/3d/Background3D';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/global.css';

function App() {
  useScrollAnimation();

  return (
    <>
      <Background3D />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
