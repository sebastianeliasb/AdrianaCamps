import React from "react";
import "./style/table.scss";
import addProject from "../../assets/add.png";
import ProjectsTable from "./ProjectsTable";
import HomeTable from "./HomeTable/HomeTable";
import StudioTable from "./StudioTable/StudioTable";
import NewsTable from "./NewsTable/NewsTable";
import ContactTable from "./ContactTable/ContactTable";
import ConceptsTable from "./ConceptsTable/ConceptsTable";

function Table({ data, showModal, selected, deleteProcess }) {
  switch (selected) {
    case "projects":
      return (
        <>
          <div className="content-selected">
            <span>{selected}</span>
            <img
              onClick={() => showModal()}
              alt="add project"
              src={addProject}
            ></img>
          </div>
          <ProjectsTable
            showModal={showModal}
            projects={data.projects}
            deleteProject={deleteProcess}
          />
        </>
      );
    case "home":
      return (
        <>
          <div className="content-selected">
            <span>{selected}</span>
            <img
              onClick={() => showModal()}
              alt="add project"
              src={addProject}
            ></img>
          </div>
          <HomeTable
            showModal={showModal}
            homes={data.homes}
            deleteHome={deleteProcess}
          />
        </>
      );
    case "studio":
      return (
        <>
          <div className="content-selected">
            <span>{selected}</span>
            <img
              onClick={() => showModal()}
              alt="add project"
              src={addProject}
            ></img>
          </div>
          <StudioTable
            showModal={showModal}
            studios={data.studios}
            deleteStudio={deleteProcess}
          />
        </>
      );
    case "news":
      return (
        <>
          <div className="content-selected">
            <span>{selected}</span>
            <img
              onClick={() => showModal()}
              alt="add project"
              src={addProject}
            ></img>
          </div>
          <NewsTable
            showModal={showModal}
            news={data.news}
            deleteNews={deleteProcess}
          />
        </>
      );
    case "contact":
      return (
        <>
          <div className="content-selected">
            <span>{selected}</span>
            <img
              onClick={() => showModal()}
              alt="add project"
              src={addProject}
            ></img>
          </div>
          <ContactTable
            showModal={showModal}
            contacts={data.contacts}
            deleteContact={deleteProcess}
          />
        </>
      );
    case "concepts":
      return (
        <>
          <div className="content-selected">
            <span>{selected}</span>
            <img
              onClick={() => showModal()}
              alt="add project"
              src={addProject}
            ></img>
          </div>
          <ConceptsTable
            showModal={showModal}
            concepts={data.concepts}
            deleteConcept={deleteProcess}
          />
        </>
      );
    default:
      return null;
  }
}

export default Table;
