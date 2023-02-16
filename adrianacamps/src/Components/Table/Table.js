import React from "react";
import "./style/table.scss";

import edit from "../../assets/edit.png";
function Table({ projects }) {
  console.log(projects);
  return (
    <>
      <div className="content-selected">Projects</div>
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
              <div>{project.name}</div>
              <div>{project.client}</div>
              <div>{project.location}</div>
              <div style={{ backgroundImage: `url(${edit})` }}></div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Table;
