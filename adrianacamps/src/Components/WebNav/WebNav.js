import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./style/webNav.scss";

function WebNav() {
  const location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // Set the initial selected state based on the current path
    const path = location.pathname;
    if (path === "/studio") {
      setSelected("studio");
    } else if (path === "/projects") {
      setSelected("projects");
    } else if (path === "/concepts") {
      setSelected("concepts");
    } else if (path === "/news") {
      setSelected("news");
    } else if (path === "/contact") {
      setSelected("contact");
    }
  }, [location.pathname]);

  const handleSelect = (name) => {
    setSelected(name);
  };

  return (
    <nav className="web-nav">
      <Link
        className={selected === "studio" ? "selected" : ""}
        onClick={() => handleSelect("studio")}
        to="/studio"
      >
        Estudio
      </Link>
      <Link
        className={selected === "projects" ? "selected" : ""}
        onClick={() => handleSelect("projects")}
        to="/projects"
      >
        Proyectos
      </Link>
      <Link
        className={selected === "concepts" ? "selected" : ""}
        onClick={() => handleSelect("concepts")}
        to="/concepts"
      >
        Conceptos a la venta
      </Link>
      <Link
        className={selected === "news" ? "selected" : ""}
        onClick={() => handleSelect("news")}
        to="/news"
      >
        Noticias
      </Link>
      <Link
        className={selected === "contact" ? "selected" : ""}
        onClick={() => handleSelect("contact")}
        to="/contact"
      >
        Contacto
      </Link>
    </nav>
  );
}

export default WebNav;
