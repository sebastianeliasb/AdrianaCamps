import React from "react";
import { Link } from "react-router-dom";

import "./style/webNav.scss";
function WebNav() {
  return (
    <nav className="web-nav">
      <Link to="/studio">Studio</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/concepts">Concepts for sale</Link>
      <Link to="/news">News</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default WebNav;
