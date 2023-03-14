import React from "react";
//style
import testImage from "../../assets/about_try_image.png";
import "./style/about.scss";
//layout
import MainPageLayout from "../../layouts/MainPageLayout";
//components
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import WebNav from "../../Components/WebNav";

function About() {
  return (
    <MainPageLayout
      backgroundColorLeft={"beige"}
      backgroundColorRight={"white"}
    >
      <WebNav />
      <ContentContainer>
        <main id="about-main">
          <div className="about-left">
            <div
              className="about-image-container"
              style={{ backgroundImage: `url(${testImage})` }}
            ></div>
          </div>
          <div className="about-right">
            <span></span>
            <div className="about-right-content">
              <div
                className="about-image-container"
                style={{ backgroundImage: `url(${testImage})` }}
              />
              <div className="about-text-container">
                <u>Sobre mi</u>
                <p>
                  Diseñadora de Interiores y Lighting Designer. Soy Hija de la
                  cultura mediterránea, hecho que ha provocado una fuerte
                  influencia en mi modo de ver y entender el diseño.
                </p>{" "}
                <p>
                  Espacios y objetos atemporales y funcionales, inspirados en la
                  simplicidad y el uso de la luz natural son premisas
                  indispensables en mis diseños, adaptadas a la modernidad, sin
                  olvidar jamás las necesidades y deseos del cliente, así como
                  las peculiaridades de cada nuevo trabajo. Como lighting
                  designer, entiendo que la luz no solo debe moldearse de modo
                  artificial, motivo por el cual, latradicional celosía,
                  reinterpretada, es un elemento recurrente en mis espacios.
                </p>
                Perfeccionista, analítica, proactiva y creativa, siempre con
                ganas de aprender cosas nuevas, mejorar y superarme. Ando en
                busca de nuevos retos y descubrir nuevos horizontes, lo que me
                ha llevado a vivir y estudiar en Italia, Suecia y Marruecos. Y
                arealizar proyectos en España, Bélgica, Países Bajos, Lituania,
                Rusia, Austria, Israel, Alemania, Kuwait, Reino Unido, China,
                Corea, Tailandia, Portugal, Polonia y Estados Unidos.
                <p>¿Cuál será el próximo destino?</p>
                <u>Filosofia</u>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <u>Recorrido</u>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>
              {/* <Footer /> */}
            </div>
          </div>
        </main>
      </ContentContainer>
    </MainPageLayout>
  );
}

export default About;
