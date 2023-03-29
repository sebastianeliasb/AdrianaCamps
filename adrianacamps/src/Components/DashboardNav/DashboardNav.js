import React from "react";
import {Link} from "react-router-dom";

function DashboardNav({selected, handleSelect}) {
    return (
        <div className="nav-body">
            <Link to="/">
                <header>Adriana</header>
            </Link>
            <div>
        <span
            className={selected === "home" ? "selected" : ""}
            onClick={() => handleSelect("home")}
        >
          Home
        </span>
            </div>
            <div>
        <span
            className={selected === "studio" ? "selected" : ""}
            onClick={() => handleSelect("studio")}
        >
          Studio
        </span>
            </div>
            <div>
        <span
            className={selected === "projects" ? "selected" : ""}
            onClick={() => {
                handleSelect("projects");
            }}
        >
          Projects
        </span>
            </div>
            <div>
        <span
            className={selected === "news" ? "selected" : ""}
            onClick={() => handleSelect("news")}
        >
          News
        </span>
            </div>
            <div>
        <span
            className={selected === "contact" ? "selected" : ""}
            onClick={() => handleSelect("contact")}
        >
          Contact
        </span>
            </div>
            <div>
        <span
            className={selected === "concepts" ? "selected" : ""}
            onClick={() => handleSelect("concepts")}
        >
          Concepts
        </span>
            </div>
            <header>Camps</header>
        </div>
    );
}

export default DashboardNav;
