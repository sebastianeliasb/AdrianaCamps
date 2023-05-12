import React, { useEffect, useState } from "react";
//style
import testImage from "../../assets/about_try_image.png";
import "./style/about.scss";
//layout
import MainPageLayout from "../../layouts/MainPageLayout";
//components
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import WebNav from "../../Components/WebNav";
import { API, Storage } from "aws-amplify";
import { listStudios } from "../../graphql/queries";

async function fetchAbout(setStudio) {
  const studioData = await API.graphql({ query: listStudios });
  const { items } = studioData.data.listStudios;
  const studioWithImages = await Promise.all(
    items.map(async (studio) => {
      if (studio.aboutImage) {
        let studiosImagesList = [];
        studiosImagesList.push(await Storage.get(studio.aboutImage));
        studio.aboutImage = studiosImagesList;
      }
      return studio;
    })
  );
  setStudio(studioWithImages);
}

function About() {
  const [studio, setStudio] = useState([]);

  useEffect(() => {
    fetchAbout(setStudio);
  }, []);

  const trayectoria = studio[0]?.aboutMe; // get the aboutMe string from the studio object
  const estudio = studio[0]?.philosophy; // get the aboutMe string from the studio object
  const clientes = studio[0]?.route; // get the aboutMe string from the studio object

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
              style={{ backgroundImage: `url(${studio[0]?.aboutImage[0]})` }}
            ></div>
          </div>
          <div className="about-right">
            <span></span>
            <div className="about-right-content">
              <div
                className="about-image-container"
                style={{ backgroundImage: `url(${studio[0]?.aboutImage[0]})` }}
              />
              <div
                className="about-text-container"
                style={{ minHeight: "500px" }}
              >
                <u>TRAYECTORIA</u>
                {/* check if aboutMe includes the "*" symbol and add a line break if it does */}
                {trayectoria && trayectoria.includes("*") ? (
                  trayectoria
                    .split("*")
                    .map((text, index) => <p key={index}>{text}</p>)
                ) : (
                  <p>{trayectoria}</p>
                )}
                <br />
                <u>EL ESTUDIO</u>
                {/* check if aboutMe includes the "*" symbol and add a line break if it does */}
                {estudio && estudio.includes("*") ? (
                  estudio
                    .split("*")
                    .map((text, index) => <p key={index}>{text}</p>)
                ) : (
                  <p>{estudio}</p>
                )}
                <br />
                <u>CLIENTES</u>
                {/* check if aboutMe includes the "*" symbol and add a line break if it does */}
                {clientes && clientes.includes("*") ? (
                  clientes
                    .split("*")
                    .map((text, index) => <p key={index}>{text}</p>)
                ) : (
                  <p>{clientes}</p>
                )}
                <br />
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
