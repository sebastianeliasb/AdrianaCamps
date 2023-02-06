import React, { useState } from "react";
//style
import testImage from "../../assets/about_try_image.png";
import "./style/about.scss";
//layout
import NameLayout from "../../layouts/nameLayout";
//components
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
function About() {
  return (
    <NameLayout>
      <main id="about-main">
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
                exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                Mollit officia consequat velit elit amet id. Irure anim
                cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
              </p>
              <p>
                Ullamco nulla ipsum excepteur minim sint consequat non ad
                exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                Mollit officia consequat velit elit amet id. Irure anim
                cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
              </p>
            </div>
          </ContentContainer>
        </div>
      </main>
    </NameLayout>
  );
}

export default About;
