import React from "react";
import "./Home.css";
import profilePic from "../../images/Profile.jpg"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
      <h1>Hi, I'm Bhuvana</h1>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a full-stack developer passionate about building web applications.</p>
      </header>

      <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-pic" />

        <div className="button-container">
        <a href="/resume.pdf" download="My_Resume.pdf" className="btn download-btn">
        Download Resume
        </a>

        </div>

        <div className="social-icons">
          <a href="https://github.com/Bhuvana123398" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon github" />
          </a>
          <a href="https://www.linkedin.com/in/kethamreddy-bhuvana-1ba7a032b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
