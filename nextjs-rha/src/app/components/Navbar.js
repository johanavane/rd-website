import React from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.scss";

function Navbar() {
  return (
    <div className={styles["nav-container"]}>
      <div className={styles["nav-flex-box"]}>
        <div className={styles["nav-logo"]}>
          <Image
            src="/rd-logo.png"
            alt="logo with the letters rd on a black background"
            width={150}
            height={40}
          />
        </div>
        <div className={styles["nav-links"]}>
          <a href="#pricing">Services</a>
          <a href="#schedule">Appointments</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
