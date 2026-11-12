import { FiArrowUp } from 'react-icons/fi';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <span>© {new Date().getFullYear()} Aryan Phalke</span>
      <a href="#home" className="footer-top">
        Back to top <FiArrowUp aria-hidden />
      </a>
    </div>
  </footer>
);

export default Footer;
