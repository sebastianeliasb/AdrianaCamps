import React from "react";
import "./style/nameBox.scss";

function NameBox(props) {
  return (
    <div
      className="main-container-big"
      style={{ zIndex: props.zIndex, color: props.color }}
    >
      <div className="left-small"></div>
      <div className="adriana-name">
        {props.navClass === "nav-open" && "nav-open-web" ? (
          <>
            <div>ADRIANA</div>
            {props.text}
            <div>CAMPS</div>
          </>
        ) : (
          <>
            <div>ADRIANA</div>
            <div className="nav-links">{props.text}</div>
            <div>CAMPS</div>
          </>
        )}
      </div>
      {/* Here nav is closed */}
      <div className="right-small">
        <nav
          className={props.navClass}
          onClick={props.toggleNav}
          style={{ display: props.show }}
        >
          {props.navClass === "nav-open" || "nav-open-web" ? (
            <>
              {console.log(props.navClass)}
              <div style={{ backgroundColor: props.navColor }}></div>
              <div style={{ backgroundColor: props.navColor }}></div>
            </>
          ) : (
            // Nav close
            <>
              <div></div>
              <div></div>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}

export default NameBox;
