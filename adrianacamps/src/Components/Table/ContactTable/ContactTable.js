import React from "react";
import edit from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";

function ContactTable({ showModal, contacts, deleteContact }) {
  return (
    <div className="content-information">
      <div className="content-row-header">
        <div style={{ maxWidth: "70%" }}>Contact Text</div>
        <div>Edit</div>
        {/* <div>Carrousel Images</div> */}
      </div>
      {contacts.map((project) => (
        <div key={project.id} className="content-row">
          <div
            style={{ maxWidth: "70%" }}
            onClick={() => console.log(project.id)}
          >
            {project.contactText}
          </div>
          <div>
            <span
              onClick={() => showModal(true, project)}
              style={{ backgroundImage: `url(${edit})` }}
            ></span>
            <span
              onClick={() => deleteContact(project.id)}
              style={{ backgroundImage: `url(${deleteIcon})` }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactTable;
