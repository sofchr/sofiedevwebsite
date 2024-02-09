import React from "react";
import { projects } from "../data";

function Portfolio() {
  return (
    <>
      <div className="portfolio-header">
        <h1 className="header">Apps I've Built</h1>
        <p className="portfolio-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
          fuga dolore.
        </p>
      </div>
      <div className="projects-section">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
            className="project-individual"
          >
            <h1 className="project-title">{project.title}</h1>
            <h2 className="subtitle">{project.subtitle}</h2>
            <p>{project.description}</p>
            <img
              alt="image of project"
              className="project-image"
              src={project.image}
            />
          </a>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
