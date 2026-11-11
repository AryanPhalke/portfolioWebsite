import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="sec">
      <div className="container">
        <SectionHeader
          index="03"
          label="Projects"
          title={
            <>
              Selected <span className="accent">work.</span>
            </>
          }
        />

        <div className="proj-grid">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        {more.length > 0 && (
          <Reveal className="more">
            <h3 className="more-title">Earlier projects</h3>
            <ul className="more-list">
              {more.map((p) => (
                <li key={p.id}>
                  <a
                    className="more-row"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="more-date">{p.date}</span>
                    <span className="more-main">
                      <span className="more-name">{p.title}</span>
                      <span className="more-desc">{p.description}</span>
                    </span>
                    <span className="more-stack">{p.techStack.join(' · ')}</span>
                    <FiArrowUpRight className="more-arrow" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Projects;
