import React from "react";
import "./Project.css";
import project1 from "../../images/Project1.jpg"; 
import project2 from "../../images/Project2.jpg";
import project3 from "../../images/Project3.jpg"; 
const projects = [
  {
    id: 1,
    title: "Rice Mill Management System",
    description: "A full-stack system using Django and PostgreSQL for managing rice mill operations efficiently.",
    image: project1,
  },
  {
    id: 2,
    title: "Bank Management System",
    description: "A web-based application for handling account management and transactions.",
    image: project2,
  },
  {
    id: 3,
    title: "Resume Builder Web Application",
    description: "An interactive web app to generate professional resumes dynamically.",
    image: project3, 
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
