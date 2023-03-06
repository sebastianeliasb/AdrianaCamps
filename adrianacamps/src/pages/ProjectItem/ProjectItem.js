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
                  <div>{projectName}</div>
                  <div>{`${projectLocation}(${projectDate})`}</div>
                  <div>{projectDescription}</div>
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
            {/* Fourth section */}
            {/* Five section */}
            {/* Six section */}
            {/* Seven section */}
            {/* Eighth section */}
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
