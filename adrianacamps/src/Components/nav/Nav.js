import React from "react";
import "./style/nav.scss";
import NameBox from "../nameBox";

function Nav(props) {
  return (
    <>
      <NameBox
        text={
          <>
            {" "}
            <a href="/studio">Studio</a>
            <a href="/projects">Projects</a>
            <a href="/concepts">Concepts for sale</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
            <a href="/language">Language</a>
          </>
        }
        toggleNav={props.toggleNav}
        navClass={"nav-close"}
      />
      <nav className="nav-home"></nav>
    </>
  );
}

export default Nav;
