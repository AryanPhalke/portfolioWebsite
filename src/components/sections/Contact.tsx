const Contact = () => {
  return (
    <section id="contact" className="contact-sec">
      <div className="sec-label">Get in touch</div>
      <h2 className="sec-title" style={{ marginBottom: "1.5rem" }}>
        Let's build
        <br />
        something great.
      </h2>
      <a href="mailto:aryanphalke366p@gmail.com" className="contact-big">
        aryanphalke366p@gmail.com 
      </a>
      <div className="contact-grid">
        {[
          { label: "LinkedIn", val: "/in/aryan-phalke", href: "https://linkedin.com/in/aryan-phalke" },
          { label: "GitHub", val: "AryanPhalke", href: "https://github.com/AryanPhalke" },
          { label: "LeetCode", val: "AryanPhalke", href: "https://leetcode.com/AryanPhalke" },
          { label: "Location", val: "Pune, Maharashtra", href: null },
        ].map(({ label, val, href }) => (
          <a
            key={label}
            className="clink"
            href={href || "#"}
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
          >
            <span className="clink-label">{label}</span>
            <span className="clink-val">{val}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
