import React from "react";
import "../styles/Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-flex">
        <section className="pricing-note">
          <h2>PRICING</h2>
          <p>
            Please note pricing for services may fluctuate based on hair length,
            density, and amount of product used.
          </p>
          <p>
            All lightening services include root shadowing, toning, blow drying
            and styling.
          </p>
          <p>
            All color services are base pricing, additional product after 2
            bowls of color are $10/bowl.
          </p>
        </section>
        <section className="pricing-list">
          <div className="box-ht">
            <h3>HAIRCUTS & TREATMENTS</h3>
            <ul>
              <li>Haircut</li>
              <li>Fringe Trim</li>
              <li>Trim Added Onto Color Service</li>
              <li>Conditioning Treatment</li>
              {/* <span>Price depends on treatment choice</span> */}
              <li>Wash & Style</li>
            </ul>
          </div>
          <div className="box-color">
            <h3>COLORING SERVICES</h3>
            <ul>
              <li>Base Color Root Retouch</li>
              <li>All Over Color</li>
              <li>Toner With Blow Dry/Style</li>
              <li>Base With Toner</li>
            </ul>
          </div>
          <div className="box-light">
            <h3>LIGHTENING SERVICES</h3>
            <ul>
              <li>Full Head Balayage</li>
              <li>Partial Head Balayage</li>
              <li>Babylights</li>
              <li>Full Highlight</li>
              <li>Partial Highlight</li>
              <li>Tipping Out Ends</li>
              <li>Face-frame Highlights</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pricing;
