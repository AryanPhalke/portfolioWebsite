import { FiArrowUpRight } from 'react-icons/fi';
import { profile } from '../../data/profile';
import Reveal from '../ui/Reveal';
import { socials } from '../../data/socials';

const Contact = () => (
  <section id="contact" className="sec contact-sec">
    <div className="container">
      <Reveal>
        <div className="sec-label">
          <span className="sec-index">06</span>
          Contact
        </div>
        <h2 className="contact-title">
          Let’s build
          <br />
          <span className="accent">something great.</span>
        </h2>
        <p className="contact-lede">
          I’m {profile.availability.toLowerCase()}. If you’re hiring for a full-stack or AI-focused
          engineering role, I’d love to hear about it.
        </p>
        <a href={`mailto:${profile.email}`} className="contact-mail">
          {profile.email}
          <FiArrowUpRight aria-hidden />
        </a>
      </Reveal>

      <Reveal className="contact-grid" delay={0.1}>
        {socials
          .filter((s) => s.label !== 'Email')
          .map(({ label, href, icon: Icon, handle }) => (
            <a key={label} className="clink" href={href} target="_blank" rel="noreferrer">
              <Icon className="clink-icon" aria-hidden />
              <span className="clink-label">{label}</span>
              <span className="clink-val">{handle}</span>
              <FiArrowUpRight className="clink-arrow" aria-hidden />
            </a>
          ))}
      </Reveal>
    </div>
  </section>
);

export default Contact;
