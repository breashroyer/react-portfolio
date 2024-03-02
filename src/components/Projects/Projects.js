import React from 'react';
import Project from './Projects'; // Adjust the path to the correct file

function Projects() {
  const projectsData = [
    {
      title: "Weather App",
      image: "path/to/your/project/image.jpg", // Replace with actual image path
      deployedUrl: "http://example.com", // Replace with actual URL
      repoUrl: "https://github.com/breashroyer?tab=repositories" // Replace with actual GitHub repo URL
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-section">
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedUrl={project.deployedUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </div>
  );
}

export default Projects;
