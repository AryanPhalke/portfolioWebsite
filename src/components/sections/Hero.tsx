import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import portrait from '../../images/aryan.webp';
import { profile, stats } from '../../data/profile';
import SocialLinks from '../ui/SocialLinks';

const ease = [0.16, 1, 0.3, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-grid container">
      <div className="hero-copy">
        <motion.div className="status-pill" {...rise(0)}>
          <span className="status-dot" aria-hidden />
          {profile.availability}
        </motion.div>

        <motion.h1 className="hero-name" {...rise(0.08)}>
          Aryan
          <br />
          <span className="hero-name-outline">Phalke</span>
        </motion.h1>

        <motion.p className="hero-role" {...rise(0.16)}>
          {profile.role} <span className="muted">·</span> {profile.focus}
        </motion.p>

        <motion.p className="hero-lede" {...rise(0.22)}>
          Full-stack developer with about two years building <strong>Esko’s CAD on Cloud</strong>, a CAD/PLM
          SaaS product, and working directly with clients like <strong>P&amp;G</strong> to turn requirements
          and production issues into shipped releases. Lately I’ve been building multi-agent AI systems.
        </motion.p>

        <motion.div className="hero-ctas" {...rise(0.3)}>
          <a href="#projects" className="btn btn-primary">
            View my work <FiArrowDownRight aria-hidden />
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-ghost">
            Get in touch <FiArrowUpRight aria-hidden />
          </a>
        </motion.div>

        <motion.div className="hero-meta" {...rise(0.36)}>
          <span className="hero-loc">
            <FiMapPin aria-hidden /> {profile.location}
          </span>
          <SocialLinks />
        </motion.div>
      </div>

      <motion.figure
        className="hero-photo"
        initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.15, ease }}
      >
        <img src={portrait} alt="Portrait of Aryan Phalke" width={900} height={1125} fetchPriority="high" />
        <figcaption className="hero-chip hero-chip-top">
          <span className="chip-k">Recent</span>
          AryanAI · multi-agent chatbot
        </figcaption>
        <div className="hero-chip hero-chip-bottom" aria-hidden>
          <span className="chip-k">Stack</span>
          React · TS · Java · Spring
        </div>
      </motion.figure>
    </div>

    <motion.dl className="stats container" {...rise(0.45)}>
      {stats.map((s) => (
        <div key={s.label} className="stat">
          <dt className="stat-label">{s.label}</dt>
          <dd className="stat-value">{s.value}</dd>
        </div>
      ))}
    </motion.dl>
  </section>
);

export default Hero;
