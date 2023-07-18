import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//style
import "./style/nameBox.scss";
import CookiesWarning from "../CookiesWarning";
function NameBox(props) {
  const mainContainerStyle = {
    zIndex: props.zIndex,
    color: props.color,
  };

  const navStyle = {
    display: props.show,
  };

  const navOpen =
    props.navClass === "nav-open" || props.navClass === "nav-open-web";

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "ES"
  );

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  function handleMouseEnter() {
    setDropdownVisible(true);
  }

  function handleMouseLeave() {
    setDropdownVisible(false);
  }

  function handleLanguageClick(language) {
    setSelectedLanguage(language);

    setDropdownVisible(false);
  }

  const availableLanguages = ["ES", "EN", "FR"];

  return (
    <>
      <CookiesWarning
        location="bottom"
        buttonText="Accept"
        cookieName="myPortfolioCookies"
        expires={150}
      ></CookiesWarning>
      <div className="overlay-container">
        <div className="main-container-big" style={mainContainerStyle}>
          <div className="left-small"></div>
          <div className="adriana-name">
            {navOpen ? (
              <>
                <div>
                  <Link to="/">ADRIANA</Link>
                </div>
                {props.text}
                <div>CAMPS</div>
              </>
            ) : (
              <>
                <div>
                  {" "}
                  <a href="/">ADRIANA</a>
                </div>
                <div className="nav-links">{props.text}</div>
                <div>CAMPS</div>
              </>
            )}
          </div>
          <div className="right-small" style={{ pointerEvents: props.events }}>
            <nav className={props.navClass} style={navStyle}>
              <div className="top-right-small">
                {navOpen ? (
                  <div className="hamburger" onClick={props.toggleNav}>
                    <div style={{ backgroundColor: props.navColor }}></div>
                    <div style={{ backgroundColor: props.navColor }}></div>
                  </div>
                ) : (
                  <>
                    <div className="hamburger-X" onClick={props.toggleNav}>
                      X
                    </div>
                  </>
                )}
                <div
                  className="language-box"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {selectedLanguage}
                  {isDropdownVisible && (
                    <div className="dropdown-menu">
                      {availableLanguages.map((language, index) =>
                        selectedLanguage !== language ? (
                          <div
                            key={index}
                            onClick={() => handleLanguageClick(language)}
                          >
                            {language}
                          </div>
                        ) : null
                      )}
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
          {/* </CookiesWarning> */}
        </div>
      </div>
    </>
  );
}

export default NameBox;
