import { FiAward, FiBookOpen, FiCheckCircle, FiMic } from 'react-icons/fi';
import { achievements } from '../../data/achievements';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';

const icons = [FiAward, FiBookOpen, FiCheckCircle, FiMic];

const Recognition = () => (
  <section id="recognition" className="sec">
    <div className="container">
      <SectionHeader
        index="05"
        label="Recognition"
        title={
          <>
            Awards, papers <span className="accent">&amp; certs.</span>
          </>
        }
      />
      <div className="rec-grid">
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={a.title} delay={i * 0.06}>
              <article className="rec-card">
                <span className="rec-icon">
                  <Icon aria-hidden />
                </span>
                <div className="rec-kind">{a.kind}</div>
                <h3 className="rec-title">{a.title}</h3>
                <p className="rec-detail">{a.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Recognition;
