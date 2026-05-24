const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span className="ft">© {year} Aryan Phalke</span>
      <span className="ft">VIIT Pune · Esko · Built with React</span>
    </footer>
  );
};

export default Footer;
