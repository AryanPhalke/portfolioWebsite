import { useScrollPosition } from '../../hooks/useScrollPosition';
import ThemeToggle from '../ui/ThemeToggler';

const Navbar = () => {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;

  return (
    <nav className={`site-nav ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">AP</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
