import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="sec proj-sec">
      <div className="proj-head">
        <div>
          <div className="sec-label">Selected work</div>
          <h2 className="sec-title">Projects</h2>
        </div>
      </div>
      <div className="proj-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
