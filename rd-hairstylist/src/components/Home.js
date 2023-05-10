import React from "react";
import "../styles/Home.css";
import brownHair from "../images/brown-hair.png";
import colorfulHair from "../images/colorful-hair.png";

function Home() {
  return (
    <div className="home-container">
      <section className="home-slogan">
        <h1>
          Cool color <br className="break-hide" /> for cool{" "}
          <br className="break-hide" />
          people.
        </h1>
        <button>
          <span>schedule</span>
        </button>
      </section>
      <section className="home-images">
        <img
          src={brownHair}
          className="image-top"
          alt="dark brown hair with light brown highlights"
        />
        <img
          src={colorfulHair}
          className="image-bottom"
          alt="silver hair with colorful highlights"
        />
      </section>
    </div>
  );
}

export default Home;
