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
  function sortData(dataArray) {
    return dataArray.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  const sortedProjects = sortData(data.projects);
  const sortedHomes = sortData(data.homes);
  const sortedStudios = sortData(data.studios);
  const sortedNews = sortData(data.news);
  const sortedContacts = sortData(data.contacts);
  const sortedConcepts = sortData(data.concepts);
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
            projects={sortedProjects}
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
            homes={sortedHomes}
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
            studios={sortedStudios}
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
            news={sortedNews}
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
            contacts={sortedContacts}
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
            concepts={sortedConcepts}
            deleteConcept={deleteProcess}
          />
        </>
      );
    default:
      return null;
  }
}

export default Table;
