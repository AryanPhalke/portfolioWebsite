import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className={`proj-card proj-c${index % 2}`}>
      <div className="proj-num" aria-hidden>
        {number}
      </div>
      <div className="proj-top">
        <span className="proj-date">{project.date}</span>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="proj-gh"
            aria-label={`${project.title} on GitHub`}
          >
            <FiGithub aria-hidden />
          </a>
        )}
      </div>
      <div className="proj-body">
        <div className="proj-tagline">{project.tagline}</div>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        {project.highlights.length > 0 && (
          <ul className="proj-points">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <ul className="pills" aria-label="Tech stack">
          {project.techStack.map((t) => (
            <li key={t} className="pill">
              {t}
            </li>
          ))}
        </ul>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
            View code <FiArrowUpRight aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
