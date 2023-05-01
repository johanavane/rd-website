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
          <a href="/Services">Services</a>
          <a href="/Pricing">Pricing</a>
          <a href="/Gallery">Gallery</a>
          <a href="/Schedule">Schedule</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
