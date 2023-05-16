import React from "react";
import edit from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";

function StudioTable({ showModal, studios, deleteStudio }) {
  return (
    <div className="content-information">
      <div className="content-row-header">
        <div>TRAYECTORIA</div>
        <div>EL ESTUDIO</div>
        <div>CLIENTES</div>
        <div>Edit</div>
      </div>{" "}
      {studios.map((project) => (
        <div key={project.id} className="content-row">
          <div onClick={() => console.log(project.id)}>{project.aboutMe}</div>
          <div>{project.philosophy}</div>
          <div>{project.route}</div>
          <div>
            {/* <span
              onClick={() => showModal(true, project)}
              style={{ backgroundImage: `url(${edit})` }}
            ></span> */}
            <span
              onClick={() => deleteStudio(project.id)}
              style={{ backgroundImage: `url(${deleteIcon})` }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudioTable;
