import React from "react";
import "../styles/Pricing.css";
import balayage from "../images/balayage.jpeg";
import color from "../images/green-color.jpeg";
import styling from "../images/styling.jpeg";

function Pricing() {
  return (
    <div className="pricing-container" id="pricing">
      <section className="pricing-note">
        <h2>SERVICES</h2>
        <p>
          Please note prices for services may fluctuate based on hair length,
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
      <section className="pricing-flexbox">
        <section>
          <div className="mini-nav navbar-hide">
            <a href="#treatments">
              <span>Treatments</span>
            </a>
            <a href="#lightening">
              <span>Lightening</span>
            </a>
            <a href="#coloring">
              <span>Coloring</span>
            </a>
          </div>
        </section>
        <section className="services-pricing">
          <section className="treatments-price price" id="treatments">
            <img src={styling} alt="long brown hair with blonde highlights" />
            <ul>
              <li>
                Conditioning Treatments <br />
                <span>
                  Price depends on treatment <br /> choice & hair needs. <br />
                </span>
                $35-$100
              </li>
              <li>
                Wash & Style
                <br />
                $50
              </li>
            </ul>
          </section>
          <section className="lightening-price price" id="lightening">
            <img src={balayage} alt="blonde medium length hair" />
            <ul>
              <li>
                Full Head Balayage <br />
                <span>
                  Including ends. <br />
                </span>
                $280+
              </li>
              <li>
                Partial Head Balayage <br />
                <span>
                  Root touch up. For <br />
                  existing clients. <br />
                </span>
                $225+
              </li>
              <li>
                Babylights <br />
                $300+
              </li>
              <li>
                Full Highlight <br />
                $200+
              </li>
              <li>
                Partial Highlight <br />
                $165+
              </li>
              <li>
                Tipping Out Ends <br />
                $25+
              </li>
              <li>
                Face-frame Highlights <br />
                <span>
                  Money piece touch up only. <br />
                </span>
                $50+
              </li>
            </ul>
          </section>
          <section className="coloring-price price" id="coloring">
            <img src={color} alt="short black hair with green tips" />
            <ul>
              <li>
                Base Color Root Retouch <br />
                $85
              </li>
              <li>
                All Over Color <br />
                <span>
                  Not a lightening service. <br />
                </span>
                $135+
              </li>
              <li>
                Toner With Blow Dry/Style <br />
                $85
              </li>
              <li>
                Base With Toner <br />
                $120
              </li>
              <li>
                Transformational Color <br />
                $90/hour
              </li>
              <li>
                Vivid Color <br />
                <span>
                  Including any lightening <br /> needed to achieve results.
                  <br />
                </span>
                $90/hour
              </li>
              <li>
                Color Corrections <br />
                $100/hour
              </li>
              <li>
                Buzz Cut Art <br />
                <span>Please inquire about price.</span>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Pricing;
