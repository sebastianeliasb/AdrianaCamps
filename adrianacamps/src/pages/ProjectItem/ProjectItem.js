import React from "react";
import { useLocation } from "react-router-dom";
import ContentContainer from "../../Components/ContentContainer";
import WebNav from "../../Components/WebNav";
import MainPageLayout from "../../layouts/MainPageLayout";
import "./style/projectItem.scss";

function ProjectItem() {
  const location = useLocation();
  const data = location.state;
  const projectName = data.project.name;
  const projectImages = {
    mainImage: data.project.projectImages,
  };
  const projectLocation = data.project.location;
  console.log(data);
  const projectDescription = data.project.description;
  const projectDate = data.project.date;

  const w = document.documentElement.clientWidth || window.innerWidth;
  let backgroundColor;
  if (w <= 600) {
    backgroundColor = "beige";
  } else {
    backgroundColor = "none";
  }
  return (
    <>
      <MainPageLayout
        backgroundColorLeft={"white"}
        backgroundColorRight={"beige"}
        backgroundColor={backgroundColor}
      >
        <WebNav />
        <ContentContainer>
          <div className="project-item-body">
            {/* First section */}
            <div className="first_section">
              <div className="project-content-left">
                <img src={projectImages.mainImage} alt="main"></img>
              </div>
              <div className="project-content-right">
                <div className="project-detail">
                  <div className="project-info">
                    <span>{projectName}</span>
                    <span>{`${projectLocation}(${projectDate})`}</span>
                    <span>{projectDescription}</span>
                  </div>
                  <div className="project-aspects">
                    <span>Cliente:Lorem Ipsum</span>
                    <span>Fotografo:Lorem Ipsum</span>
                    <span>Superficie:Lorem Ipsum</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Second section */}
            <div>
              <img src={projectImages.mainImage} alt="first"></img>
            </div>
            {/* Third section */}
            <div>
              <img src={projectImages.mainImage} alt="pic"></img>
              <span>
                At ground floor level, while daily life and lines of sight
                extrude freely beyond the walls of the house to colonise the
                entirety of the plot, the atmosphere is purposefully
                introspective. On the upper floors, the emphasis shifts to
                elevated vistas and successive recalibration of the dialogue
                between interior space and the fall of natural light.
              </span>
              <span></span>
              <img src={projectImages.mainImage} alt="pic"></img>
            </div>
            {/* Fourth section */}
            <div>
              <img src={projectImages.mainImage} alt="pic"></img>
            </div>
            {/* Five section */}
            <div>
              <span></span>
              <img src={projectImages.mainImage} alt="pic"></img>
              <img src={projectImages.mainImage} alt="pic"></img>
              <span></span>
            </div>
            {/* Six section */}
            <div>
              <span></span>
              <img src={projectImages.mainImage} alt="pic"></img>
              <img src={projectImages.mainImage} alt="pic"></img>
              <span></span>
            </div>
            {/* Seven section */}
            <div>
              <img src={projectImages.mainImage} alt="pic"></img>
            </div>
            {/* Eighth section */}
            <div>
              <img src={projectImages.mainImage} alt="pic"></img>
              <img src={projectImages.mainImage} alt="pic"></img>
              <img src={projectImages.mainImage} alt="pic"></img>
            </div>
          </div>
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default ProjectItem;
