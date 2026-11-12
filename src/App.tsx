import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
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
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
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
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;
