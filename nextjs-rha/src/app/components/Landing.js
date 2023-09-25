import React from "react";
import styles from "../styles/landing.module.scss";
import Image from "next/image";

function Home() {
  return (
    <div className={styles.homeBackground}>
      <div className={styles.homeContainer}>
        <section className={styles.homeSlogan}>
          <h1>
            Cool Color <br className={styles.breakHide} /> For Cool
            <br className={styles.breakHide} /> People.
          </h1>
          <button>
            <a href="#schedule">SCHEDULE</a>
          </button>
        </section>
        <section className={styles.homeImages}>
          <Image
            className={` ${styles.imageTop} ${styles.floating}`}
            priority
            src="/brown-hair.png"
            alt="dark brown hair with light brown highlights"
            width={300}
            height={319}
          />
          <Image
            className={` ${styles.imageBottom} ${styles.floating}`}
            priority
            src="/colorful-hair.png"
            alt="silver hair with colorful highlights"
            width={300}
            height={319}
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
