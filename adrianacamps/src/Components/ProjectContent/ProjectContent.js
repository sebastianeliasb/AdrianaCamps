import React from "react";
import { Link } from "react-router-dom";
//style
import "./style/projectContent.scss";
function ProjectContent({ data }) {
  if (!data) {
    return null;
  }
  return data.map((project) => (
    <>
      {/* {console.log(project)} */}
      <div className="project-content-box">
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${project.projectImages[0].projectImageMain}) `,
          }}
        ></div>
        <div className="project-title1">
          <Link to={`/project/${project.id}`} state={{ project }}>
            {project.projectInfo[0].name}
          </Link>
        </div>
        <div className="project-title2">{project.projectInfo[0].name}</div>
      </div>
    </>
  ));
}

export default ProjectContent;
