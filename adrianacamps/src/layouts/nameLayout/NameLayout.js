import React, { useState } from "react";
import { Link } from "react-router-dom";
//compoonents
import NameBox from "../../Components/nameBox";
import Nav from "../../Components/nav";

function NameLayout({ children, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {" "}
      {!isOpen ? (
        <>
          <NameBox
            text={
              props.text || (
                <div className="page-nav">
                  {" "}
                  <Link to="/about">Studio</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              )
            }
            color={props.color || "black"}
            toggleNav={toggleNav}
            navClass={props.navClass || "nav-open-web"}
            navColor={props.navColor || "black"}
          />
          {children}
        </>
      ) : (
        <>
          <Nav toggleNav={toggleNav} />
        </>
      )}
    </>
  );
}

export default NameLayout;
