import React from "react";
import "../styles/Services.css";
import imageHairColor from "../images/hair-color.png";
import imageHairLightening from "../images/hair-lightening.png";
import imageHairTreatment from "../images/hair-treatment.png";

function Services() {
  return (
    <div className="services-container">
      <div className="services-flexbox">
        <section className="color">
          <div className="circle-image">
            <img
              // https://thenounproject.com/icon/hair-color-4502960/
              src={imageHairColor}
              alt="black and white drawing of hair being dyed"
            />
          </div>
          <span>Color Services</span>
        </section>
        <section className="lightening">
          <div className="circle-image">
            <img
              // https://thenounproject.com/icon/hair-5185624/
              src={imageHairLightening}
              alt="black and white drawing of woman with long hair"
            />
          </div>
          <span>Lightening Services</span>
        </section>
        <section className="treatments">
          <div className="circle-image">
            <img
              // https://thenounproject.com/icon/bio-keratin-4162498/
              src={imageHairTreatment}
              alt="black and white drawing of a hair product bottle"
            />
          </div>
          <span>Hair Treatments</span>
        </section>
      </div>
    </div>
  );
}

export default Services;
