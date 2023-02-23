import React from "react";

function HomeTable({ showModal }) {
  return (
    <div className="content-information">
      <div className="content-row-header">
        <div>Carrousel Images</div>
      </div>
      {/* {projects.map((project) => (
        <div key={project.id} className="content-row">
          <div onClick={() => console.log(project.id)}>{project.name}</div>
          <div>{project.client}</div>
          <div>{project.location}</div>
          <div>
            <span
              onClick={() => showModal(true, project)}
              style={{ backgroundImage: `url(${edit})` }}
            ></span>
            <span
              onClick={() => deleteProject(project.id)}
              style={{ backgroundImage: `url(${deleteIcon})` }}
            ></span>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default HomeTable;
