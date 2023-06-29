import React from "react";
import "../styles/Home.css";
import brownHair from "../images/brown-hair.png";
import colorfulHair from "../images/colorful-hair.png";

function Home() {
  return (
    <div className="home-background">
      <div className="home-container">
        <section className="home-slogan">
          <h1>
            Cool Color <br className="break-hide" /> For Cool
            <br className="break-hide" /> People.
          </h1>
          <button>
            <a href="#schedule">SCHEDULE</a>
          </button>
        </section>
        <section className="home-images">
          <img
            src={brownHair}
            className="image-top floating"
            alt="dark brown hair with light brown highlights"
          />
          <img
            src={colorfulHair}
            className="image-bottom floating floating-two"
            alt="silver hair with colorful highlights"
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
