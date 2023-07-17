import React from "react";
import { Link } from "react-router-dom";
//style
import "./style/projectContent.scss";

function ProjectContent({ data, loading, error }) {
  if (!data) {
    return null;
  }
  return data.data.map((project) => (
    <div key={project.id} className="project-content-box">
      <div className="project-image-link">
        <Link to={`/project/${project.id}`} state={{ project }}>
          <img
            src={project.attributes.main_image.data.attributes.url}
            className="project-image"
            alt={project.attributes.name}
          />
        </Link>
      </div>
      <div className="project-title1">
        <Link to={`/project/${project.id}`} state={{ project }}>
          {project.attributes.project_title}
        </Link>
      </div>
      <div className="project-title2">{project.attributes.subtitle}</div>
    </div>
  ));
}

export default ProjectContent;
