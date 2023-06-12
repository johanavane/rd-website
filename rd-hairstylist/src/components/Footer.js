import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="column">
        <span className="rachel">Rachel Depillo</span>
        <a href="https://www.google.com/maps/place/The+Young+American+Salon+-+Southern+Local/@33.7451847,-117.8319899,17z/data=!4m15!1m8!3m7!1s0x80dcd96264c1e473:0x4c830c54a07283d8!2s720+W+First+St,+Tustin,+CA+92780!3b1!8m2!3d33.7451847!4d-117.8319899!16s%2Fg%2F11c13gmjvq!3m5!1s0x80dcd962631f8aaf:0xf4a31d3609ce54fa!8m2!3d33.7454467!4d-117.8319672!16s%2Fg%2F11d_dg3w29">
          720 W First St
        </a>
        <a href="https://www.google.com/maps/place/The+Young+American+Salon+-+Southern+Local/@33.7451847,-117.8319899,17z/data=!4m15!1m8!3m7!1s0x80dcd96264c1e473:0x4c830c54a07283d8!2s720+W+First+St,+Tustin,+CA+92780!3b1!8m2!3d33.7451847!4d-117.8319899!16s%2Fg%2F11c13gmjvq!3m5!1s0x80dcd962631f8aaf:0xf4a31d3609ce54fa!8m2!3d33.7454467!4d-117.8319672!16s%2Fg%2F11d_dg3w29">
          Tustin, CA 92780
        </a>
      </section>
      <section className="column">
        <span>By Appointment Only</span>
        <span>Tuesday - Saturday</span>
        <span>9:30am - 3:30pm</span>
      </section>
      <section className="column">
        <a className="footer-link" href="#pricing">
          Services
        </a>
        <a className="footer-link" href="#schedule">
          Schedule
        </a>
        <a className="footer-link" href="#schedule">
          Policies
        </a>
      </section>
      <section className="column">
        <a
          className="footer-link"
          href="https://www.instagram.com/racheldepillo/"
        >
          Instagram
        </a>
        <a className="footer-link" href="https://s.yelp.com/SUtBOgL2Vg">
          Yelp
        </a>
      </section>
    </div>
  );
}

export default Footer;
