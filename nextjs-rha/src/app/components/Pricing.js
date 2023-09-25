import React from "react";
import Image from "next/image";
import styles from "../styles/pricing.module.scss";

function Pricing() {
  return (
    <div className={styles["pricing-container"]} id="pricing">
      <section className={styles["pricing-note"]}>
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
      <section className={styles["pricing-flexbox"]}>
        <section>
          <div className={`${styles["mini-nav"]} ${styles["navbar-hide"]}`}>
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
        <section className={styles["services-pricing"]}>
          <section
            className={` ${styles["treatments-price"]} ${styles["price"]}`}
            id="treatments"
          >
            <Image
              src="/styling.jpeg"
              alt="long brown hair with blonde highlights"
              width={150}
              height={170}
            />
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
          <section
            className={` ${styles["lightening-price"]} ${styles["price"]}`}
            id="lightening"
          >
            <Image
              src="/balayage.jpeg"
              alt="blonde medium length hair"
              width={150}
              height={170}
            />
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
          <section
            className={` ${styles["coloring-price"]} ${styles["price"]}`}
            id="coloring"
          >
            <Image
              src="/green-color.jpeg"
              alt="short black hair with green tips"
              width={150}
              height={170}
            />
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
