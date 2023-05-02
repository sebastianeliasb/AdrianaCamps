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

function About() {
  const [studio, setStudio] = useState([]);

  useEffect(() => {
    fetchAbout();
  }, []);

  async function fetchAbout() {
    const studioData = await API.graphql({ query: listStudios });
    const { items } = studioData.data.listStudios;
    const studioWithImages = [];
    for (let index = 0; index < items.length; index++) {
      let studio = items[index];
      if (studio.aboutImage) {
        let studiosImagesList = [];
        for (let idx = 0; idx < studio.aboutImage.length; idx++) {
          studiosImagesList.push(await Storage.get(studio.aboutImage[idx]));
        }
        studio.aboutImage = studiosImagesList;
      }
      studioWithImages.push(studio);
    }
    setStudio(studioWithImages);
    console.log("studio image - ", studioWithImages);
  }

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
                <u>Sobre mi</u>
                <p>{studio[0]?.aboutMe}</p>
                <br />
                <u>Filosofia</u>
                <p>{studio[0]?.philosophy}</p>
                <br />
                <u>Recorrido</u>
                <p>{studio[0]?.route}</p>
                <br />{" "}
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
