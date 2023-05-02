import React from "react";
import edit from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";

function StudioTable({ showModal, studios, deleteStudio }) {
  return (
    <div className="content-information">
      <div className="content-row-header">
        <div>About Me</div>
        <div>Philosophy</div>
        <div>Route</div>
        <div>Edit</div>
      </div>{" "}
      {studios.map((project) => (
        <div key={project.id} className="content-row">
          <div onClick={() => console.log(project.id)}>{project.aboutMe}</div>
          <div>{project.philosophy}</div>
          <div>{project.username}</div>
          <div>
            <span
              onClick={() => showModal(true, project)}
              style={{ backgroundImage: `url(${edit})` }}
            ></span>
            <span
              onClick={() => deleteStudio(project.id, project.aboutMe)}
              style={{ backgroundImage: `url(${deleteIcon})` }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudioTable;
