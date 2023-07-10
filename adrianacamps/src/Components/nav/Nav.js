import React, { useState, useEffect } from "react";
import "./style/nav.scss";
import NameBox from "../nameBox";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Nav(props) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ES"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  function handleOpenDropdown() {
    setDropdownVisible(!isDropdownVisible);
  }

  function handleCloseDropdown() {
    setDropdownVisible(false);
  }

  function handleLanguageClick(language) {
    setSelectedLanguage(language);
    setDropdownVisible(false);
  }

  const languageOptions = [
    { value: "EN", label: "ENGLISH" },
    { value: "ES", label: "SPANISH" },
    { value: "FR", label: "FRENCH" },
  ];
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
            {/* <Link to="/dashboard">Dashboard</Link> */}
            {isMobile && (
              <div className="language-box-nav" onClick={handleOpenDropdown}>
                Language
                {isDropdownVisible && (
                  <div className="dropdown-menu">
                    {languageOptions.map((language) =>
                      selectedLanguage !== language ? (
                        <div
                          key={language.value}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLanguageClick(language.value);
                          }}
                        >
                          {language.label}
                        </div>
                      ) : null
                    )}
                  </div>
                )}
              </div>
            )}
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
