import React from "react";
import { useLocation } from "react-router-dom";
import ContentContainer from "../../Components/ContentContainer";
import MainPageLayout from "../../layouts/MainPageLayout";
import "./style/projectItem.scss";

function ProjectItem() {
  const location = useLocation();
  const data = location.state;
  const projectName = data.project.projectInfo[0].name;
  const projectImages = {
    mainImage: data.project.projectImages[0].projectImageMain,
  };
  const projectLocation = data.project.projectInfo[0].location;
  console.log(data);
  const projectDescription = data.project.projectInfo[0].description;
  const projectDate = data.project.projectInfo[0].date;
  return (
    <>
      <MainPageLayout backgroundColor={"beige"}>
        <ContentContainer>
          <div className="padding">
            <div
              className="project-image-main"
              style={{
                backgroundImage: `url(${projectImages.mainImage}) `,
              }}
            ></div>

            <div className="project-detail ">
              <div>{projectName}</div>
              <div>{`${projectLocation}(${projectDate})`}</div>
              <div>{projectDescription}</div>
            </div>
          </div>
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
          ></div>
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default ProjectItem;
