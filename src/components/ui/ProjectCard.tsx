import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const number = String(index + 1).padStart(2, '0');
  const colorClass = `proj-c${index % 3}`;

  return (
    <article className={`proj-card ${colorClass}`}>
      <div className="proj-bg-num">{number}</div>
      <div className="proj-overlay" />
      <div className="proj-content">
        <div className="proj-tag">{project.date}</div>
        <div className="proj-title">{project.title}</div>
        <div className="proj-sub">{project.description}</div>
        <div className="proj-stack">
          {project.techStack.map((tech) => (
            <span key={tech} className="proj-pill">{tech}</span>
          ))}
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
            View Code <span className="proj-arrow">-</span>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
