const Hero = () => {
  const shortYear = new Date().getFullYear().toString().slice(-2);

  return (
    <section id="home" className="landing-hero">
      <div className="landing-top-right">
        VIIT Pune
      </div>

      <div className="landing-canvas">
        <div className="landing-word" aria-label="Portfolio">
          {'PORTFOLIO'.split('').map((letter, index) => (
            <span key={`${letter}-${index}`} className={`landing-letter l${index + 1}`}>
              {letter}
            </span>
          ))}
        </div>
        <div className="landing-illustration">
        </div>
        <div className="landing-year">
          &apos;{shortYear}
        </div>
      </div>

      <div className="landing-name">Aryan Phalke</div>
      <a className="landing-email" href="mailto:aryanphalke366p@gmail.com">
        aryanphalke366p@gmail.com
      </a>
    </section>
  );
};

export default Hero;
