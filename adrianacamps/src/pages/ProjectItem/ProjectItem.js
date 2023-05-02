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
    mainImage: data.project.projectImages[0],
  };
  const projectLocation = data.project.location;
  const projectDescription = data.project.description;
  const projectDate = data.project.date;
  const projectClient = data.project.client;
  const projectPhotographer = data.project.photographer;
  const projectSize = data.project.surface;
  const subDescription = data.project.subDescription;

  const w = document.documentElement.clientWidth || window.innerWidth;
  let backgroundColor;
  if (w <= 600) {
    backgroundColor = "beige";
  } else {
    backgroundColor = "none";
  }

  const project_images = data.project.projectImages;
  console.log(project_images);
  return (
    <>
      {/* <div>
        {data.project.projectImages.map((el) => (
          <div key={el} className="project-content-left">
            <img src={el} alt="main" />
          </div>
        ))}
      </div> */}
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
                <img src={project_images[0]} alt="main"></img>
              </div>
              <div className="project-content-right">
                <div className="project-detail">
                  <div className="project-info">
                    <span>{projectName}</span>
                    <span>{`${projectLocation}(${projectDate})`}</span>
                    <span>{projectDescription}</span>
                  </div>
                  <div className="project-aspects">
                    <span>
                      {projectClient ? `Cliente: ${projectClient}` : null}
                    </span>
                    <span>
                      {projectPhotographer
                        ? `Fotografo: ${projectPhotographer}`
                        : null}
                    </span>
                    <span>
                      {projectSize ? `Superficie: ${projectSize}` : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Second section */}
            <div>
              <img src={project_images[1]} alt="first"></img>
            </div>
            {/* Third section */}
            <div>
              <img src={project_images[2]} alt="pic"></img>
              <span>{subDescription}</span>
              <span></span>
              <img src={project_images[3]} alt="pic"></img>
            </div>
            {/* Fourth section */}
            <div>
              <img src={project_images[4]} alt="pic"></img>
            </div>
            {/* Five section */}
            <div>
              <span></span>
              <img src={project_images[5]} alt="pic"></img>
              <img src={project_images[6]} alt="pic"></img>
              <span></span>
            </div>
            {/* Six section */}
            <div>
              <span></span>
              <img src={project_images[7]} alt="pic"></img>
              <img src={project_images[8]} alt="pic"></img>
              <span></span>
            </div>
            {/* Seven section */}
            <div>
              <img src={project_images[9]} alt="pic"></img>
            </div>
            {/* Eighth section */}
            <div>
              <img src={project_images[10]} alt="pic"></img>
              <img src={project_images[11]} alt="pic"></img>
              <img src={project_images[12]} alt="pic"></img>
            </div>
          </div>
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default ProjectItem;
