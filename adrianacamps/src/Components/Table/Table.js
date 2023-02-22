import React, { useState } from "react";
import "./style/table.scss";

import edit from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";

function Table({ projects, showModal, selected, deleteProject, projectId }) {
  return (
    <>
      <div className="content-selected">
        <span>{selected}</span>
        {selected === "projects" ? (
          <button onClick={() => showModal()}>Create new</button>
        ) : null}
      </div>
      {selected === "projects" ? (
        <div className="content-information">
          <div className="content-row-header">
            <div>Name</div>
            <div>Client</div>
            <div>Location</div>
            <div>Edit</div>
          </div>
          {projects.map((project, index) => (
            <>
              {" "}
              <div key={index} className="content-row">
                <div onClick={() => console.log(project.id)}>
                  {project.name}
                </div>
                <div>{project.client}</div>
                <div>{project.location}</div>
                <div>
                  <span
                    onClick={() => showModal(true)}
                    style={{ backgroundImage: `url(${edit})` }}
                  ></span>
                  <span
                    onClick={() => deleteProject(project.id)}
                    style={{ backgroundImage: `url(${deleteIcon})` }}
                  ></span>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Table;
