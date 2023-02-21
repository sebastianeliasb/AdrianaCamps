import React, { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import "./style/modal.scss";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { API } from "aws-amplify";
import { createProjects } from "../../graphql/mutations";
import { withAuthenticator } from "@aws-amplify/ui-react";

const initialState = {
  name: "",
  subName: "",
  location: "",
  date: "",
  description: "",
  subDescription: "",
  client: "",
  photographer: "",
  surface: "",
  projectImages: "",
};
function Modal({ show, toggleModal, projects, isEditing, ...props }) {
  const [project, setproject] = useState(initialState);
  const {
    name,
    subName,
    location,
    date,
    description,
    subDescription,
    client,
    photographer,
    surface,
    projectImages,
  } = project;

  function onChange(e) {
    setproject(() => ({
      ...project,
      [e.target.name]: e.target.value,
    }));
  }

  async function createNewProject() {
    if (!name) return;
    const id = uuid();
    project.id = id;

    await API.graphql({
      query: createProjects,
      variables: { input: project },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
  }
  return (
    <>
      {show ? (
        <>
          <div onClick={() => toggleModal()} className="modal-backdrop">
            {" "}
          </div>
          {isEditing ? (
            <div className="modal-body">
              <div className="modal-title">
                <span>{props.modalTitle} edit</span>
              </div>
              <div className="modal-nav">{props.navTabs}</div>
              <div className="modal-info-container">
                <SimpleMDE style={{ width: "100% " }} />
              </div>
              <button>Confirm</button>
            </div>
          ) : (
            <div className="modal-body">
              <div className="modal-title">
                <span>{props.modalTitle} add</span>
              </div>
              <div className="modal-nav">{props.navTabs}</div>
              <div className="modal-info-container">
                <input onChange={onChange} name="name" value={project.name} />
                {/* <input
                  name="description"
                  onChange={onChange}
                  value={project.description}
                /> */}
              </div>
              <button
                onClick={createNewProject}
              >{`Create ${props.modalTitle}`}</button>
            </div>
          )}
        </>
      ) : null}
    </>
  );
}

export default withAuthenticator(Modal);
