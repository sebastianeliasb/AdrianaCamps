import React from "react";
//style
import "./style/modalCarrusel.scss";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ModalCarrusel({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="modal-carrusel">
        <Slider {...settings}>
          {children}
          {/* <div>
            <img src={props.image} alt="Image 2" />
          </div>
          <div>
            <img src={props.image} alt="Image 3" />
          </div> */}
        </Slider>
      </div>
    </>
  );
}

export default ModalCarrusel;
