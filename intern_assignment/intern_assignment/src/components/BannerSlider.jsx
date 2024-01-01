import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import "../styles/BannerSlider.css";
import img1 from "../assets/toggleHeadImg1.png";
import img2 from "../assets/toggleHeadImg2.png";
import img3 from "../assets/toggleHeadImg3.png";
import img4 from "../assets/toggleHeadImg4.png";


const BannerSlider = () => {
  const bannerDetails = [
    {
      h2: "Lorem ipsum",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ad, reiciendis nemo sint cupiditate suscipit error placeat odio beatae magnam veritatis illo? Laudantium dicta sed obcaecati nostrum delectus praesentium inventore.",
      img: `${img1}`,
    },
    {
      h2: "Lorem ipsum",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ad, reiciendis nemo sint cupiditate suscipit error placeat odio beatae magnam veritatis illo? Laudantium dicta sed obcaecati nostrum delectus praesentium inventore.",
      img: `${img2}`,
    },
    {
      h2: "Lorem ipsum",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ad, reiciendis nemo sint cupiditate suscipit error placeat odio beatae magnam veritatis illo? Laudantium dicta sed obcaecati nostrum delectus praesentium inventore.",
      img: `${img3}`,
    },
    {
      h2: "Lorem ipsum",
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ad, reiciendis nemo sint cupiditate suscipit error placeat odio beatae magnam veritatis illo? Laudantium dicta sed obcaecati nostrum delectus praesentium inventore.",
      img: `${img4}`,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider-container">
       <div className="slider" style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
          {bannerDetails.map((ele, ind) => 
              <div key={ind} className="slide">
                <div className="textAndBtnContentDiv">
                  <h2>{ele.h2}</h2>
                  <p>{ele.p}</p>
                  <button><p>Know More</p> <FontAwesomeIcon className="bannerSlideBtnArrow" icon={faCaretRight}/></button>
                </div>
                <div className="bannerSlideImgDiv">
                  <img
                    className="bannerSlideImg"
                    src={ele.img}
                    alt={`Slide ${ind + 1}`}
                  />
                </div>
              </div>
          )} 
      </div>
      <div className="pagination">
        {bannerDetails.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
