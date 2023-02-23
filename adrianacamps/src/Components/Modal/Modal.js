import React, { useState, useCallback, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./style/modal.scss";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { API } from "aws-amplify";
import { createProjects, updateProjects } from "../../graphql/mutations";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { getProjects } from "../../graphql/queries";

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
function Modal({
  show,
  toggleModal,
  projects,
  projectData,
  isEditing,
  selected,
  ...props
}) {
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
    toggleModal();
    setproject(initialState);
  }
  // const id = projectData.id;
  return (
    <>
      {show ? (
        <>
          <div onClick={() => toggleModal()} className="modal-backdrop">
            {" "}
          </div>
          {isEditing ? (
            <div className="modal-body">
              <div
                onClick={() => console.log(projectData.id)}
                className="modal-title"
              >
                <span>{props.modalTitle} edit</span>
              </div>
              {/* <div className="modal-nav">{props.navTabs}</div> */}
              <div className="modal-info-container">
                <input
                  className="name-input"
                  onChange={onChange}
                  name="name"
                  value={projectData.name}
                  placeholder="name"
                />
              </div>
              <button>Confirm</button>
            </div>
          ) : (
            <div className="modal-body">
              <div className="modal-title">
                <span>{props.modalTitle} add</span>
              </div>
              {/* <div className="modal-nav">{props.navTabs}</div> */}
              {selected === "projects" ? (
                <div className="modal-info-container">
                  <input
                    className="name-input"
                    onChange={onChange}
                    name="name"
                    value={project.name}
                    placeholder="name"
                  />
                  <input
                    className="client-input"
                    onChange={onChange}
                    name="client"
                    value={project.client}
                    placeholder="client"
                  />
                  <input
                    className="location-input"
                    onChange={onChange}
                    name="location"
                    value={project.location}
                    placeholder="location"
                  />
                  <input
                    className="subName-input"
                    onChange={onChange}
                    name="subName"
                    value={project.subName}
                    placeholder="subName"
                  />
                  <input
                    className="desc-input"
                    onChange={onChange}
                    name="description"
                    value={project.description}
                    placeholder="description"
                  />
                  <input
                    className="subDesc-input"
                    onChange={onChange}
                    name="subDescription"
                    value={project.subDescription}
                    placeholder="subDescription"
                  />
                  <input
                    className="photographer-input"
                    onChange={onChange}
                    name="photographer"
                    value={project.photographer}
                    placeholder="photographer"
                  />
                  <input
                    className="surface-input"
                    onChange={onChange}
                    name="surface"
                    value={project.surface}
                    placeholder="surface"
                  />
                  <input
                    className="images-input"
                    onChange={onChange}
                    name="projectImages"
                    value={project.projectImages}
                    placeholder="projectImages"
                  />
                </div>
              ) : null}
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
