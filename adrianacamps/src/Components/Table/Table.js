import React, { useState } from "react";
import "./style/table.scss";

import edit from "../../assets/edit.png";

function Table({ projects, showModal, selected }) {
  return (
    <>
      <div className="content-selected">
        <span>{selected}</span>
        <button onClick={() => showModal()}>Create new</button>
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
                <div>{project.name}</div>
                <div>{project.client}</div>
                <div>{project.location}</div>
                <div>
                  <span
                    onClick={() => showModal("edit")}
                    style={{ backgroundImage: `url(${edit})` }}
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
