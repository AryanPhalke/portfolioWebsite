import { profile } from '../../data/profile';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';

const facts = [
  { k: 'Education', v: 'B.Tech, Information Technology', s: 'VIIT Pune · GPA 8.52 · 2025' },
  { k: 'Experience', v: '~2 years, Esko', s: 'SDE 1 · previously intern' },
  { k: 'Based in', v: 'Pune, India', s: 'Maharashtra' },
  { k: 'Status', v: profile.availability, s: 'Open to new roles', highlight: true },
];

const About = () => (
  <section id="about" className="sec">
    <div className="container">
      <SectionHeader
        index="01"
        label="About"
        title={
          <>
            I build products <span className="accent">end to end.</span>
          </>
        }
      />

      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            I’m a <strong>full-stack software engineer</strong> working mostly in{' '}
            <strong>Java, Spring Boot, React and TypeScript</strong>. For about two years I worked on{' '}
            <strong>CAD on Cloud</strong> at Esko, a CAD/PLM SaaS product for packaging design. I shipped
            features across the stack, from PDF-to-CAD page extraction and similar-design search to
            thumbnail performance work that halved load times.
          </p>
          <p>
            I like working close to the people who use what I build. At Esko I worked directly with clients
            including <strong>P&amp;G</strong> on ArtiosCAD–ENOVIA 3DEXPERIENCE integrations and turned their
            production issues into fixes that shipped.
          </p>
          <p>
            I’m also deep into <strong>applied AI</strong>. I ran knowledge-transfer sessions for the
            engineering team on Claude’s architecture, prompt engineering and token optimization. On the
            side I build things like a LangGraph-routed multi-agent assistant and a deepfake detector
            that became a published paper.
          </p>
        </Reveal>

        <Reveal className="facts" delay={0.1}>
          {facts.map((f) => (
            <div key={f.k} className={`fact ${f.highlight ? 'fact-hl' : ''}`}>
              <div className="fact-k">{f.k}</div>
              <div className="fact-v">{f.v}</div>
              <div className="fact-s">{f.s}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
