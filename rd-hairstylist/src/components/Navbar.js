import React from "react";
import "../styles/Navbar.css";
import logo from "../images/rd-logo.png";
import rdlogo from "../images/rd-letter-logo.png";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-flex-box">
        <div className="nav-logo">
          <img
            src={logo}
            className="rd-logo-nav"
            alt="logo with the letters rd on a black background"
          />
        </div>
        <div className="nav-links">
          {/* <a href="/Home">Home</a> */}
          <a href="#pricing">Services</a>
          <a href="#schedule">Appointments</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
