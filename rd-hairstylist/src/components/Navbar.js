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
            src={rdlogo}
            className="rd-logo-nav"
            alt="logo with rachel depillo on a black background"
          />
        </div>
        <div className="nav-links">
          <a href="/Home">Home</a>
          <a href="#pricing">Services</a>
          <a href="#schedule">Appointments</a>
          <a href="#gallery">Gallery</a>
          {/* <a href="#schedule">Schedule</a> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
