import React from "react";
import edit from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";

function ConceptsTable({ showModal, concepts, deleteConcept }) {
  return (
    <div className="content-information">
      <div className="content-row-header">
        <div>Concept Title</div>
        <div>Concept Text</div>
        <div>Delete</div>
        {/* <div>Delete</div> */}
      </div>
      {concepts.map((project) => (
        <div key={project.id} className="content-row">
          <div onClick={() => console.log(project.id)}>
            {project.conceptTitle}
          </div>
          <div>{project.conceptText}</div>
          <div>
            {/* <span
              onClick={() => showModal(true, project)}
              style={{ backgroundImage: `url(${edit})` }}
            ></span> */}
            <span
              onClick={() => deleteConcept(project.id)}
              style={{ backgroundImage: `url(${deleteIcon})` }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConceptsTable;
