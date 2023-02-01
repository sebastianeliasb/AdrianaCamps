import React, { useState } from "react";
import testImage from "../../assets/about_try_image.png";
// import Carrusel from "../../Components/Carrusel";
import "./style/about.scss";
import NameLayout from "../../layouts/nameLayout";
import Nav from "../../Components/nav";
function About() {
  return (
    <>
      <NameLayout>
        <main id="about-main">
          <div className="about-left">
            {" "}
            <div>HOLA</div>
          </div>
          <div className="about-right">
            <div className="page-content-container">
              <div
                className="about-image-container"
                style={{ backgroundImage: `url(${testImage}) ` }}
              ></div>
              <div className="about-text-container">
                <p>
                  {" "}
                  Ullamco nulla ipsum excepteur minim sint consequat non ad
                  exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                  Mollit officia consequat velit elit amet id. Irure anim
                  cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
                </p>
                <p>
                  {" "}
                  Ullamco nulla ipsum excepteur minim sint consequat non ad
                  exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                  Mollit officia consequat velit elit amet id. Irure anim
                  cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
                </p>
                <p>
                  {" "}
                  Ullamco nulla ipsum excepteur minim sint consequat non ad
                  exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                  Mollit officia consequat velit elit amet id. Irure anim
                  cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
                </p>
                <p>
                  {" "}
                  Ullamco nulla ipsum excepteur minim sint consequat non ad
                  exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                  Mollit officia consequat velit elit amet id. Irure anim
                  cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
                </p>
                <p>
                  {" "}
                  Ullamco nulla ipsum excepteur minim sint consequat non ad
                  exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                  Mollit officia consequat velit elit amet id. Irure anim
                  cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
                </p>
                <p>
                  {" "}
                  Ullamco nulla ipsum excepteur minim sint consequat non ad
                  exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                  Mollit officia consequat velit elit amet id. Irure anim
                  cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
                </p>
                <p>
                  {" "}
                  Ullamco nulla ipsum excepteur minim sint consequat non ad
                  exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                  Mollit officia consequat velit elit amet id. Irure anim
                  cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
                </p>
                <p>
                  {" "}
                  Ullamco nulla ipsum excepteur minim sint consequat non ad
                  exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                  Mollit officia consequat velit elit amet id. Irure anim
                  cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
                </p>
                <p>
                  {" "}
                  Ullamco nulla ipsum excepteur minim sint consequat non ad
                  exercitation. Pariatur esse sit aliquip ex ea pariatur eu.
                  Mollit officia consequat velit elit amet id. Irure anim
                  cupidatat cillum velit ipsum quis aute anim ea nulla nulla in.
                </p>
              </div>
            </div>
          </div>
        </main>
      </NameLayout>
    </>
  );
}

export default About;
