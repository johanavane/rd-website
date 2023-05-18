import React from "react";
import "../styles/Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container" id="pricing">
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
          All color services are base pricing, additional product after 2 bowls
          of color are $10/bowl.
        </p>
      </section>
      <section className="pricing-boxes">
        <div className="box-haircuts">
          <h3>TREATMENTS</h3>
          <ul>
            <div>
              <li className="needs-info">
                Conditioning Treatments <span className="right">$35-$100</span>
              </li>
              <li className="add-info">
                Price depends on treatment <br /> choice & hair needs.
              </li>
            </div>
            <li>
              Wash & Style <span className="right">$50</span>
            </li>
          </ul>
        </div>
        <div className="box-light">
          <h3>LIGHTENING SERVICES</h3>
          <ul>
            <div>
              <li className="needs-info">
                Full Head Balayage <span className="right">$280+</span>
              </li>
              <li className="add-info">Including ends.</li>
            </div>
            <div>
              <li className="needs-info">
                Partial Head Balayage <span className="right">$225+</span>
              </li>
              <li className="add-info">Root touch up. For existing clients.</li>
            </div>
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
            <div>
              <li className="needs-info">
                Face-frame Highlights <span className="right">$50+</span>
              </li>
              <li className="add-info">Money piece touch up only.</li>
            </div>
          </ul>
        </div>
        <div className="box-color">
          <h3>COLORING SERVICES</h3>
          <ul>
            <li>
              Base Color Root Retouch <span className="right">$85</span>
            </li>
            <div>
              <li className="needs-info">
                All Over Color <span className="right">$135+</span>
              </li>
              <li className="add-info">Not a lightening service.</li>
            </div>
            <li>
              Toner With Blow Dry/Style <span className="right">$85</span>
            </li>
            <li>
              Base With Toner <span className="right">$120</span>
            </li>
            <li>
              Transformational Color <span className="right">$90/hour</span>
            </li>
            <div>
              <li className="needs-info">
                Vivid Color <span className="right">$90/hour</span>
              </li>
              <li className="add-info">
                Including any lightening needed <br /> to achieve result.
              </li>
            </div>
            <li>
              Color Corrections <span className="right">$100/hour</span>
            </li>
            <li className="needs-info">
              Buzz Cut Art <span className="right">TBD</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
