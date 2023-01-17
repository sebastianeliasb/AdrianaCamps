import React from "react";
import "./style/nav.scss";
import NameBox from "../nameBox";

function Nav(props) {
  return (
    <nav className="nav-home">
      <NameBox
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
    </nav>
  );
}

export default Nav;
