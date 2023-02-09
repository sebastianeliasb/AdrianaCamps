import React from "react";
//style
import testImage from "../../assets/about_try_image.png";
import "./style/about.scss";
//layout
import NameLayout from "../../layouts/nameLayout";
import MainPageLayout from "../../layouts/MainPageLayout";
//components
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
function About() {
  return (
    <MainPageLayout>
      <div className="about-left">
        <div>HOLA</div>
      </div>
      <div className="about-right">
        <ContentContainer>
          <div
            className="about-image-container"
            style={{ backgroundImage: `url(${testImage})` }}
          />
          <div className="about-text-container">
            <p>
              Ullamco nulla ipsum excepteur minim sint consequat non ad
              exercitation. Pariatur esse sit aliquip ex ea pariatur eu. Mollit
              officia consequat velit elit amet id. Irure anim cupidatat cillum
              velit ipsum quis aute anim ea nulla nulla in.
            </p>
            <p>
              Ullamco nulla ipsum excepteur minim sint consequat non ad
              exercitation. Pariatur esse sit aliquip ex ea pariatur eu. Mollit
              officia consequat velit elit amet id. Irure anim cupidatat cillum
              velit ipsum quis aute anim ea nulla nulla in.
            </p>
          </div>
        </ContentContainer>
      </div>
    </MainPageLayout>
  );
}

export default About;
