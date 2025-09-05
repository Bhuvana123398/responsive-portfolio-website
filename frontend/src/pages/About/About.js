import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      <p className="about-text">
        Hello! I'm a Full-Stack Developer with a passion for creating 
        web applications. I specialize in React, Node.js, Django, and PostgreSQL.
        Currently, I have completed projects like Bank Management System, Resume Builder, 
        and Rice Mill Management System.
      </p>

      <h2 className="skills-heading">Skills</h2>
      <ul className="skills-list">
        <li>React.js & JavaScript</li>
        <li>Node.js & Express</li>
        <li>PostgreSQL, MongoDB & MySQL</li>
        <li>Python & Django</li>
        <li>HTML, CSS & Bootstrap</li>
      </ul>
    </div>
  );
};

export default About;
