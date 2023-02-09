import React from "react";
//style
import "./style/projectContent.scss";
function ProjectContent({ data }) {
  if (!data) {
    return null;
  }
  return (
    <div className="project-content-box">
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${data.projectImages[0].projectImageMain}) `,
        }}
      ></div>
      <div className="project-title1">{data.projectInfo[0].name}</div>
      <div className="project-title2">{data.projectInfo[0].name}</div>
    </div>
  );
}

export default ProjectContent;
