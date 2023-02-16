import React from "react";
import { useLocation } from "react-router-dom";
import ContentContainer from "../../Components/ContentContainer";
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
