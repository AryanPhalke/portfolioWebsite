import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/sections/NavBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Recognition from './components/sections/Recognition';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="page">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Recognition />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
