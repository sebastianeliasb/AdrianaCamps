import React from "react";
import "./style/projectContent.scss";
import projectImage from "../../assets/project_image.jpg";
function ProjectContent() {
  return (
    <div className="project-content-box">
      <div
        className="project-image"
        style={{ backgroundImage: `url(${projectImage}) ` }}
      ></div>
      <div className="project-title1">hola</div>
      <div className="project-title2">hola</div>
    </div>
  );
}

export default ProjectContent;
