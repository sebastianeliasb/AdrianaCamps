import React from "react";
import "./style/nav.scss";
import NameBox from "../nameBox";

function Nav(props) {
  return (
    <>
      <NameBox
        zIndex={2}
        text={
          <>
            {" "}
            <a href="/about">Studio</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
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
