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
              <li>
                Haircuts <span className="right">$75</span>
              </li>
              <li>
                Fringe Trim <span className="right">$15</span>
              </li>
              <li>
                Trim Added Onto Color Service <span className="right">$50</span>
              </li>
              <li>
                Conditioning Treatment <span className="right">$35-$100</span>
              </li>
              {/* <span>Price depends on treatment choice</span> */}
              <li>
                Wash & Style <span className="right">$50</span>
              </li>
            </ul>
          </div>
          <div className="box-color">
            <h3>COLORING SERVICES</h3>
            <ul>
              <li>
                Base Color Root Retouch <span className="right">$85</span>
              </li>
              <li>
                All Over Color <span className="right">$135+</span>
              </li>
              <li>
                Toner With Blow Dry/Style <span className="right">$85</span>
              </li>
              <li>
                Base With Toner <span className="right">$120</span>
              </li>
            </ul>
          </div>
          <div className="box-light">
            <h3>LIGHTENING SERVICES</h3>
            <ul>
              <li>
                Full Head Balayage <span className="right">$280</span>
              </li>
              <li>
                Partial Head Balayage <span className="right">$225+</span>
              </li>
              <li>
                Babylights <span className="right">$300+</span>
              </li>
              <li>
                Full Highlight <span className="right">$200+</span>
              </li>
              <li>
                Partial Highlight <span className="right">$165+</span>
              </li>
              <li>
                Tipping Out Ends <span className="right">$25+</span>
              </li>
              <li>
                Face-frame Highlights <span className="right">$50+</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pricing;
