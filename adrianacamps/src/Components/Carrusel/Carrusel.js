import React from "react";
//style
import "./style/carrusel.scss";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic2 from "../../assets/news_image.jpg";
import homeImage from "../../assets/home_image.jpg";
import pic from "../../assets/project_image.jpg";

function Carrusel({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
  };
  console.log("images - ", data);
  return (
    <>
      <div className="carrusel">
        <Slider {...settings}>
          {data.length > 0 &&
            data.map((home, index) => (
              <div key={index}>
                <img src={home.carrouselImages[0]} alt="Image 1" />
              </div>
            ))}
        </Slider>
      </div>
      <div className="backdrop"></div>
    </>
  );
}

// function Carrusel({ data }) {
//   return (
//     <>
//       <div className="carrusel">
//         {data[0]?.carrouselImages.map((home, index) => (
//           <div
//             ley={index}
//             className="project-image"
//             style={{
//               backgroundImage: `url(${home}) `,
//               backgroundSize: "cover",
//               width: "100%",
//               height: "100%",
//             }}
//           />
//         ))}
//       </div>
//       <div className="backdrop" />
//     </>
//   );
// }

export default Carrusel;
