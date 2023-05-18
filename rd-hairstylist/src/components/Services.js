import React from "react";
import "../styles/Services.css";
import imageTreatments from "../images/treatments.png";
import imageColor from "../images/color.png";
import imageLightening from "../images/lightening.png";

function Services() {
  return (
    <div className="services-container" id="services">
      <div className="services-flexbox">
        <section className="treatments">
          <img src={imageTreatments} />
          <span>Treatments</span>
        </section>
        <section className="color">
          <img src={imageColor} />
          <span>Color</span>
        </section>
        <section className="lightening">
          <img src={imageLightening} />
          <span>Lightening</span>
        </section>
      </div>
    </div>
  );
}

export default Services;
