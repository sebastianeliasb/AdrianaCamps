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
  // console.log(data);
  const projectDescription = data.project.description;
  const projectDate = data.project.date;
  return (
    <>
      <MainPageLayout
        backgroundColorLeft={"white"}
        backgroundColorRight={"beige"}
      >
        <WebNav />
        <ContentContainer>
          <div className="project-item-body">
            {/* First section */}
            <div>
              <div className="project-content-left">
                <div
                  className="project-image-main"
                  style={{
                    backgroundImage: `url(${projectImages.mainImage}) `,
                  }}
                ></div>
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
              <div
                className="project-image-large"
                style={{
                  backgroundImage: `url(${projectImages.mainImage}) `,
                }}
              ></div>
            </div>
            {/* Third section */}
            <div>
              <img></img>
              <span>
                At ground floor level, while daily life and lines of sight
                extrude freely beyond the walls of the house to colonise the
                entirety of the plot, the atmosphere is purposefully
                introspective. On the upper floors, the emphasis shifts to
                elevated vistas and successive recalibration of the dialogue
                between interior space and the fall of natural light.
              </span>
              <span></span>
              <img></img>
            </div>
            {/* Fourth section */}
            <div>
              <img></img>
            </div>
            {/* Five section */}
            <div>
              <span></span>
              <img></img>
              <img></img>
              <span></span>
            </div>
            {/* Six section */}
            <div>
              <span></span>
              <img></img>
              <img></img>
              <span></span>
            </div>
            {/* Seven section */}
            <div>
              <img></img>
            </div>
            {/* Eighth section */}
            <div>
              <img></img>
              <img></img>
              <img></img>
            </div>
          </div>

          {/* <div className="project-order-box">
              {" "}
              <div
                className="project-content-left"
                style={{
                  backgroundImage: `url(${projectImages.mainImage}) `,
                }}
              ></div>
              <div
                className="project-content-right"
                style={{
                  backgroundImage: `url(${projectImages.mainImage}) `,
                }}
              ></div>
            </div> */}

          {/* <div
              className="project-images"
              style={{
                backgroundImage: `url(${projectImages.mainImage}) `,
              }}
            ></div>
            <div
              className="project-images"
              style={{
                backgroundImage: `url(${projectImages.mainImage}) `,
              }}
            ></div>
            <div
              className="project-images"
              style={{
                backgroundImage: `url(${projectImages.mainImage}) `,
              }}
            ></div>
            <div
              className="project-images"
              style={{
                backgroundImage: `url(${projectImages.mainImage}) `,
              }}
            ></div> */}
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default ProjectItem;
