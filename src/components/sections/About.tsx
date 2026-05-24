import geminiImg from '../../images/Gemini_Generated_Image_5bi9pj5bi9pj5bi9.png';

const About = () => {
  return (
    <section id="about" className="sec">
      <div className="sec-label">Who I am</div>
      <h2 className="sec-title">
        I'm Aryan.
        <br />
        <span className="accent">A builder.</span>
      </h2>
      <div className="about-grid">
        <div>
          <div className="id-card">
            <div className="sticker sticker-1">UX</div>
            <div className="sticker sticker-2">DEV</div>
            <div className="sticker sticker-3">ML</div>
            <div className="id-card-inner">
              <div className="id-avatar">
                <img src={geminiImg} alt="Aryan" className="id-avatar-photo" />
              </div>
            </div>
            <div className="id-name-card">ARYAN</div>
            <div style={{ height: "1rem" }} />
            <div className="id-info">
              <div>
                <div className="id-info-label">Education</div>
                <div className="id-info-val">B.Tech IT, VIIT Pune</div>
              </div>
              <div>
                <div className="id-info-label">CGPA</div>
                <div className="id-info-val">8.52 / 10</div>
              </div>
              <div>
                <div className="id-info-label">Current Role</div>
                <div className="id-info-val">SWE Trainee, Esko</div>
              </div>
              <div>
                <div className="id-info-label">Location</div>
                <div className="id-info-val">Pune, Maharashtra</div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>
            <strong> Software Engineer </strong>currently working at <strong>Esko</strong> , contributing to CAD on Cloud — a web-based CAD platform used for managing and designing packaging files. I mainly work with React.js on frontend development, building reusable components, improving existing features, and solving day-to-day development issues.
        </p>
        <p>
            I’m interested in full-stack development. I’ve worked on projects involving <strong>machine learning, deepfake detection, recommendation systems, and chatbots</strong> using technologies like <strong> React, Flask, Node.js, and Python.</strong>
        </p>
          <div className="about-contact">
            <div className="about-contact-title">Contact & Links</div>
            {[
              { ico: "Li", label: "linkedin.com/in/aryan-phalke", href: "https://linkedin.com/in/aryan-phalke" },
              { ico: "Gh", label: "github.com/AryanPhalke", href: "https://github.com/AryanPhalke" },
              { ico: "LC", label: "leetcode.com/AryanPhalke", href: "https://leetcode.com/AryanPhalke" },
              { ico: "EM", label: "aryanphalke366p@gmail.com", href: "mailto:aryanphalke366p@gmail.com" },
            ].map(({ ico, label, href }) => (
              <a key={label} href={href} className="contact-item" target="_blank" rel="noreferrer">
                <span className="contact-icon">{ico}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
