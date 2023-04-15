import React from "react";
import { Link } from "react-router-dom";
//style
import "./style/nameBox.scss";

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

  return (
    <div className="overlay-container">
      <div className="main-container-big" style={mainContainerStyle}>
        <div className="left-small"></div>
        <div className="adriana-name">
          {navOpen ? (
            <>
              <div>
                <Link to="/">MLlamo</Link>
              </div>
              {props.text}
              <div>SEB</div>
            </>
          ) : (
            <>
              <div>
                {" "}
                <a href="/">MLlamo</a>
              </div>
              <div className="nav-links">{props.text}</div>
              <div>SEB</div>
            </>
          )}
        </div>
        <div className="right-small" style={{ pointerEvents: props.events }}>
          <nav
            className={props.navClass}
            onClick={props.toggleNav}
            style={navStyle}
          >
            {navOpen ? (
              <>
                <div style={{ backgroundColor: props.navColor }}></div>
                <div style={{ backgroundColor: props.navColor }}></div>
              </>
            ) : (
              <>
                <div></div>
                <div></div>
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NameBox;
