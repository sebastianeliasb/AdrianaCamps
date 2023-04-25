import React from "react";
import "./style/nav.scss";
import NameBox from "../nameBox";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Nav(props) {
  const isMobile = useMediaQuery({ maxWidth: 600 }); // verifica si la pantalla es una pantalla móvil
  return (
    <>
      <NameBox
        text={
          <>
            {" "}
            <Link to="/studio">Studio</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/concepts">Concepts for sale</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
            {isMobile && <div to="/language">Language</div>}
          </>
        }
        events={props.events || "all"}
        toggleNav={props.toggleNav}
        navClass={"nav-close"}
      />
      <nav className="nav-home"></nav>
    </>
  );
}

export default Nav;
