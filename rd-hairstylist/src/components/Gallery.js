import React from "react";
import "../styles/Gallery.css";
import imageOne from "../images/hair-one.png";
import imageTwo from "../images/hair-two.png";
import imageThree from "../images/hair-three.png";
import imageFour from "../images/hair-four.png";
import imageFive from "../images/hair-five.png";
import imageSix from "../images/hair-six.png";
import imageSeven from "../images/hair-seven.png";
import imageEight from "../images/hair-eight.png";
import imageNine from "../images/hair-nine.png";
import imageTen from "../images/hair-ten.png";

function Gallery() {
  return (
    <div className="gallery-container">
      <h4>follow @racheldepillo on instagram</h4>

      <div className="gallery-flex">
        <div className="row">
          <img src={imageOne} alt="short light brown hair with blonde bangs" />
          <img src={imageTwo} alt="short blue hair" />
          <img src={imageThree} alt="cheetah print buzz cut" />
          <img
            className="fourth"
            src={imageFour}
            alt="long auburn hair with blonde bangs"
          />
          <img className="fifth" src={imageFive} alt="long light brown hair" />
        </div>
        <div className="row">
          <img src={imageSix} />
          <img src={imageSeven} alt="short dark brown hair" />
          <img src={imageEight} alt="bright pink hair" />
          <img
            className="fourth"
            src={imageNine}
            alt="dark hair with light red highlights"
          />
          <img
            className="fifth"
            src={imageTen}
            alt="black hair with blonde bangs "
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
