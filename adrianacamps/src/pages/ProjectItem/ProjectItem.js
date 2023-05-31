import React from "react";
import { useLocation } from "react-router-dom";
import ContentContainer from "../../Components/ContentContainer";
import WebNav from "../../Components/WebNav";
import MainPageLayout from "../../layouts/MainPageLayout";
import "./style/projectItem.scss";

function ProjectItem() {
  const location = useLocation();
  const data = location.state;
  const {
    name: projectName,
    projectImages,
    location: projectLocation,
    description: projectDescription,
    date: projectDate,
    client: projectClient,
    photographer: projectPhotographer,
    surface: projectSize,
    subDescription,
  } = data.project;

  const backgroundColor = window.innerWidth <= 600 ? "beige" : "none";

  return (
    <>
      <WebNav />
      <MainPageLayout
        backgroundColorLeft={"white"}
        backgroundColorRight={"beige"}
        backgroundColor={backgroundColor}
      >
        {/* ... */}
        <ContentContainer>
          <div className="project-item-body">
            {/* First section */}
            <div className="first_section">
              <div className="project-content-left">
                <img src={projectImages[0]} alt="main"></img>
              </div>
              <div className="project-content-right">
                <div className="project-detail">
                  <div className="project-info">
                    <span>{projectName}</span>
                    <span>{projectLocation}</span>
                    <span>{projectDate}</span>
                    <span>{projectDescription}</span>
                  </div>
                  <div className="project-aspects">
                    {projectClient && <span>Cliente: {projectClient}</span>}
                    {projectPhotographer && (
                      <span>Fotografo: {projectPhotographer}</span>
                    )}
                    {projectSize && <span>Superficie: {projectSize}</span>}
                  </div>
                </div>
              </div>
            </div>
            {/* Second section */}
            {projectImages[1] && (
              <div>
                <img src={projectImages[1]} alt="first"></img>
              </div>
            )}
            {/* Third section */}
            {projectImages[2] && (
              <div>
                <img src={projectImages[2]} alt="pic"></img>
                <span>{subDescription}</span>
                <span></span>
                <img src={projectImages[3]} alt="pic"></img>
              </div>
            )}
            {/* Fourth section */}
            {projectImages[4] && (
              <div>
                <img src={projectImages[4]} alt="pic"></img>
              </div>
            )}
            {/* Five section */}
            {projectImages[5] && projectImages[6] && (
              <div>
                <span></span>
                <img src={projectImages[5]} alt="pic"></img>
                <img src={projectImages[6]} alt="pic"></img>
                <span></span>
              </div>
            )}
            {/* Six section */}
            {projectImages[7] && projectImages[8] && (
              <div>
                <span></span>
                <img src={projectImages[7]} alt="pic"></img>
                <img src={projectImages[8]} alt="pic"></img>
                <span></span>
              </div>
            )}
            {/* Seven section */}
            {projectImages[9] && (
              <div>
                <img src={projectImages[9]} alt="pic"></img>
              </div>
            )}
            {/* Eighth section */}
            {projectImages[10] && projectImages[11] && projectImages[12] && (
              <div>
                <img src={projectImages[10]} alt="pic"></img>
                <img src={projectImages[11]} alt="pic"></img>
                <img src={projectImages[12]} alt="pic"></img>
              </div>
            )}
          </div>
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default ProjectItem;
