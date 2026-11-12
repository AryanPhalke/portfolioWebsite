import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useScrolled } from '../../hooks/useScrolled';
import { useActiveSection } from '../../hooks/useActiveSection';
import ThemeToggle from '../ui/ThemeToggler';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const isScrolled = useScrolled(24);
  const active = useActiveSection(['home', ...links.map((l) => l.id)]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!(e.target as Element).closest('.site-nav')) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <header className={`site-nav ${isScrolled || open ? 'is-scrolled' : ''}`}>
      <nav className="nav-inner" aria-label="Primary">
        <a href="#home" className="nav-logo" aria-label="Aryan Phalke, back to top">
          AP<span className="accent">.</span>
        </a>

        <ul id="nav-menu" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? 'is-active' : undefined}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
