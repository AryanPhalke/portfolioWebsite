import { FiCloud, FiCode, FiCpu, FiLayout, FiServer, FiShield, FiTool } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import { skills } from '../../data/skills';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';

const icons: Record<string, IconType> = {
  'AI & ML': FiCpu,
  'Languages & Databases': FiCode,
  'Backend & APIs': FiServer,
  Frontend: FiLayout,
  'Cloud & DevOps': FiCloud,
  'Testing & Quality': FiShield,
  'Tools & Practices': FiTool,
};

const Skills = () => (
  <section id="skills" className="sec sec-alt">
    <div className="container">
      <SectionHeader
        index="04"
        label="Skills"
        title={
          <>
            My <span className="accent">toolkit.</span>
          </>
        }
      />

      <div className="skills-grid">
        {skills.map((group, i) => {
          const Icon = icons[group.category] ?? FiCode;
          return (
            <Reveal key={group.category} delay={(i % 3) * 0.06} className={i === 0 ? 'skill-wide' : i === skills.length - 1 ? 'skill-wide-end' : undefined}>
              <article className="skill-card">
                <h3 className="skill-title">
                  <span className="skill-icon">
                    <Icon aria-hidden />
                  </span>
                  {group.category}
                </h3>
                <ul className="pills">
                  {group.items.map((item) => (
                    <li key={item} className="pill pill-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
