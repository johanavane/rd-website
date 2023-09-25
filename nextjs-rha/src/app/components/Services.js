import React from "react";
import Image from "next/image";
import styles from "../styles/services.module.scss";

function Services() {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["services-flexbox"]}>
        <section className={styles["color"]}>
          <div className={styles["circle-image"]}>
            {/* https://thenounproject.com/icon/hair-color-4502960/ */}
            <Image
              src="/hair-color.png"
              alt="black and white drawing of hair being dyed"
              width={100}
              height={100}
            />
          </div>
          <span>Color Services</span>
        </section>
        <section className={styles["lightening"]}>
          <div className={styles["circle-image"]}>
            {/* https://thenounproject.com/icon/hair-5185624/ */}
            <Image
              src="/hair-lightening.png"
              alt="black and white drawing of woman with long hair"
              width={100}
              height={100}
            />
          </div>
          <span>Lightening Services</span>
        </section>
        <section className={styles["treatments"]}>
          <div className={styles["circle-image"]}>
            {/* https://thenounproject.com/icon/bio-keratin-4162498/ */}
            <Image
              src="/hair-treatment.png"
              alt="black and white drawing of a hair product bottle"
              width={100}
              height={100}
            />
          </div>
          <span>Hair Treatments</span>
        </section>
      </div>
    </div>
  );
}

export default Services;
