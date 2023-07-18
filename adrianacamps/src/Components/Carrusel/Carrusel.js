import React from "react";
//style
import "./style/carrusel.scss";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrusel({ data, error, loading }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
  };

  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

  const carrouselURLs = data.data.map((url) => {
    return url.attributes.carrousel_image.data.attributes.url;
  });

  const imageTitle = data.data.map((title) => {
    return title.attributes.Image_name;
  });

  return (
    <>
      <div className="carrusel">
        <Slider {...settings}>
          {carrouselURLs.length > 0 &&
            carrouselURLs.map((home, index) => {
              return (
                <div key={index}>
                  <img
                    src={home} // Updated image URL here
                    alt={imageTitle}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
      <div className="backdrop"></div>
    </>
  );
}

export default Carrusel;
