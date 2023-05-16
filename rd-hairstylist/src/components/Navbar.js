import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-flex-box">
        <div className="nav-logo">
          <a>RD</a>
        </div>
        <div className="nav-links">
          <a href="/Home">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#gallery">Gallery</a>
          <a href="#schedule">Schedule</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
