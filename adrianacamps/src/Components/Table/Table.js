import React from "react";
import "./style/table.scss";

import ProjectsTable from "./ProjectsTable";
import HomeTable from "./HomeTable/HomeTable";
import StudioTable from "./StudioTable/StudioTable";
import NewsTable from "./NewsTable/NewsTable";
import ContactTable from "./ContactTable/ContactTable";
import ConceptsTable from "./ConceptsTable/ConceptsTable";

function Table({data, showModal, selected, deleteProject}) {
    switch (selected) {
        case "projects":
            return (
                <>
                    <div className="content-selected">
                        <span>{selected}</span>
                        <button onClick={() => showModal()}>Create new</button>
                    </div>
                    <ProjectsTable
                        showModal={showModal}
                        projects={data.projects}
                        deleteProject={deleteProject}
                    />
                </>
            );
        case "home":
            return (
                <>
                    <div className="content-selected">
                        <span>{selected}</span>
                        <button onClick={() => showModal()}>Create New</button>
                    </div>
                    <HomeTable/>
                </>
            );
        case "studio":
            return (
                <>
                    <div className="content-selected">
                        <span>{selected}</span>
                        <button onClick={() => showModal()}>Create New</button>
                    </div>
                    <StudioTable/>
                </>
            );
        case "news":
            return (
                <>
                    <div className="content-selected">
                        <span>{selected}</span>
                        <button onClick={() => showModal()}>Create New</button>
                    </div>
                    <NewsTable/>
                </>
            );
        case "contact":
            return (
                <>
                    <div className="content-selected">
                        <span>{selected}</span>
                        <button onClick={() => showModal()}>Create new</button>
                    </div>
                    <ContactTable/>
                </>
            );
        case "concepts":
            return (
                <>
                    <div className="content-selected">
                        <span>{selected}</span>
                        <button onClick={() => showModal()}>Create New</button>
                    </div>
                    <ConceptsTable/>
                </>
            );
        default:
            return null;
    }
}

export default Table;
