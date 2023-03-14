import React from "react";
//style
import "./style/carrusel.scss";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic2 from "../../assets/news_image.jpg";
import homeImage from "../../assets/home_image.jpg";
import pic from "../../assets/project_image.jpg";

function Carrusel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="carrusel">
        <Slider {...settings}>
          <div>
            <img src={homeImage} alt="Image 1" />
          </div>
          <div>
            <img src={pic2} alt="Image 2" />
          </div>
          <div>
            <img src={pic} alt="Image 3" />
          </div>
        </Slider>
      </div>
      <div className="backdrop"></div>
    </>
  );
}

export default Carrusel;
