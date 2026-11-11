import { experiences } from '../../data/experience';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';

const Experience = () => (
  <section id="experience" className="sec sec-alt">
    <div className="container">
      <SectionHeader
        index="02"
        label="Experience"
        title={
          <>
            Where I’ve <span className="accent">shipped.</span>
          </>
        }
      />

      <ol className="timeline">
        {experiences.map((item, i) => (
          <li key={`${item.company}-${item.role}`} className="tl-item">
            <Reveal delay={i * 0.05}>
              <div className="tl-grid">
                <div className="tl-when">
                  <div className="tl-date">{item.duration}</div>
                  {(item.location || item.mode) && (
                    <div className="tl-where">{[item.location, item.mode].filter(Boolean).join(' · ')}</div>
                  )}
                </div>
                <div className="tl-body">
                  <h3 className="tl-role">{item.role}</h3>
                  <div className="tl-co">{item.company}</div>
                  <ul className="tl-points">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <ul className="pills" aria-label="Technologies">
                    {item.tags.map((t) => (
                      <li key={t} className="pill">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
