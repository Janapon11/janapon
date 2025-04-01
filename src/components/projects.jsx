import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Codigo',
      description: 'Coding web-application',
      githubLink: 'https://github.com/Llander15/Codigo_v1.git',
      liveDemoLink: 'https://codigo-v1.onrender.com/',
      imageUrl: '/codigo.png', // Image in the public folder
    },
    
   
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          {/* Add an image to each project */}
          <img src={project.imageUrl} alt={project.title} className="project-image" />

          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-buttons">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn github-btn">
              GitHub
            </a>
            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn demo-btn">
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
