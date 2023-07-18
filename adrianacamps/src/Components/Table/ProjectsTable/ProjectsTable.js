import React from "react";
import edit from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";

function ProjectsTable({ projects, showModal, deleteProject }) {
  return (
    <div className="content-information">
      <div className="content-row-header">
        <div>Name</div>
        <div>Client</div>
        <div>Location</div>
        <div></div>
        <div>Delete</div>
      </div>
      {projects.map((project) => (
        <div key={project.id} className="content-row">
          <div onClick={() => console.log(project.id)}>{project.name}</div>
          <div>{project.client}</div>
          <div>{project.location}</div>
          <div>
            {/* <span
                onClick={() => showModal(true, project)}
                style={{backgroundImage: `url(${edit})`}}
            /> */}
            <span
              onClick={() => deleteProject(project.id)}
              style={{ backgroundImage: `url(${deleteIcon})` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsTable;
