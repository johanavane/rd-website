import React from "react";
import Image from "next/image";
import styles from "../styles/gallery.module.scss";

function Gallery() {
  return (
    <div className={styles["gallery-container"]} id="gallery">
      <h3>Follow @racheldepillo on Instagram for more!</h3>
      <div className={styles["gallery-flex"]}>
        <div className={styles["row"]}>
          <Image
            src="/hair-one.png"
            alt="short light brown hair with blonde bangs"
            width={200}
            height={200}
          />
          <Image
            src="/hair-two.png"
            alt="short blue hair"
            width={200}
            height={200}
          />
          <Image
            src="/hair-three.png"
            alt="cheetah print buzz cut"
            width={200}
            height={200}
          />
          <Image
            src="/hair-four.png"
            alt="long auburn hair with blonde bangs"
            width={200}
            height={200}
          />
          <Image
            src="/hair-five.png"
            className={styles["fifth"]}
            alt="long light wavy brown hair"
            width={200}
            height={200}
          />
        </div>
        <div className={styles["row"]}>
          <Image
            src="/hair-six.png"
            alt="dark hair with light red highlights"
            width={200}
            height={200}
          />
          <Image
            src="/hair-seven.png"
            alt="short dark brown hair"
            width={200}
            height={200}
          />
          <Image
            src="/hair-eight.png"
            alt="bright pink hair"
            width={200}
            height={200}
          />
          <Image
            src="/hair-nine.png"
            alt="dark hair with orange tips"
            width={200}
            height={200}
          />
          <Image
            src="/hair-ten.png"
            className={styles["fifth"]}
            alt="black hair with blonde bangs"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
