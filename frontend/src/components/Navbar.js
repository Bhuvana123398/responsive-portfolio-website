import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../images/Profile.jpg"; 

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={profilePic} alt="Profile" style={styles.profileImg} />
        <h2 style={styles.logo}>My Portfolio</h2>
      </div>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
};


const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 20px", background: "#333", color: "white" },
  logoContainer: { display: "flex", alignItems: "center" }, // Align image & text
  profileImg: { width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px", border: "2px solid white" }, // Circular image
  logo: { margin: 0, fontSize: "22px" },
  link: { margin: "0 15px", textDecoration: "none", color: "white", fontSize: "18px" },
};

export default Navbar;
