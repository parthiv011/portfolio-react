import './Project.css';
import projects from '../../utils/Data';

export const ProjectCard = () => {
  return (
    <section>
      <header className="project-header">Projects</header>
        {projects.map((project, index) => (
            <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      
    </section>
  );
};
