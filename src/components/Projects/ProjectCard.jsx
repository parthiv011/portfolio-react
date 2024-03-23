import './Project.css';
import projects from '../../utils/data';
import { useRef } from 'react';

export const ProjectCard = () => {
  return (
    <section className='flex-grid' id='projects'>
      <header className="project-header">Projects</header>
      <div className='projects-container'>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className='tech-stack'>
            {project.tools.map(tool => (
              <p key={tool}>{tool}</p>
            ) )}
              
            </div>
            <div className="links">
              <a href={project.github} target="_blank">
                Github
              </a>
              <a href={project.link} target="_blank">
                Visit Project
              </a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};
