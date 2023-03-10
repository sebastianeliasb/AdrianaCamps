import React from "react";
import { Link } from "react-router-dom";
//style
import "./style/projectContent.scss";
function ProjectContent({ data }) {
  if (!data) {
    return null;
  }

  return data.map((project, index) => (
    <>
      <div key={index} className="project-content-box">
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${project.projectImages}) `,
          }}
        ></div>
        <div className="project-title1">
          <Link to={`/project/${project.id}`} state={{ project }}>
            {project.name}
          </Link>
        </div>
        <div className="project-title2">{project.name}</div>
      </div>
    </>
  ));
}

export default ProjectContent;
