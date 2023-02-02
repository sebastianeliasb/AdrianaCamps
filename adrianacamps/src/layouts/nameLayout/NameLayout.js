import React, { useState } from "react";
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
                  <a href="/about">Studio</a>
                  <a href="/projects">Projects</a>
                  <a href="/contact">Contact</a>
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
