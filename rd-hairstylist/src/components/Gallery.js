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
          <img src={imageOne} />
          <img src={imageTwo} />
          <img src={imageThree} />
          <img className="fourth" src={imageFour} />
          <img className="fifth" src={imageFive} />
        </div>
        <div className="row">
          <img src={imageSix} />
          <img src={imageSeven} />
          <img src={imageEight} />
          <img className="fourth" src={imageNine} />
          <img className="fifth" src={imageTen} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
