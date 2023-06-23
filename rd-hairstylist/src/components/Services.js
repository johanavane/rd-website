import React from "react";
import "../styles/Services.css";
import imageTreatments from "../images/treatments.png";
import imageColor from "../images/color.png";
import imageLightening from "../images/lightening.png";
import imageHairColor from "../images/hair-color.png";
import imageHairLightening from "../images/hair-lightening.png";
import imageHairTreatment from "../images/hair-treatment.png";

function Services() {
  return (
    <div className="services-container">
      <div className="services-flexbox">
        <section className="color">
          <div className="circle-image">
            <img src={imageHairColor} />
          </div>
          <span>Color Services</span>
        </section>
        <section className="lightening">
          <div className="circle-image">
            <img src={imageHairLightening} />
          </div>
          <span>Lightening Services</span>
        </section>
        <section className="treatments">
          <div className="circle-image">
            <img src={imageHairTreatment} />
          </div>
          <span>Hair Treatments</span>
        </section>
      </div>
    </div>
  );
}

export default Services;
