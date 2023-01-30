import React, { useState } from "react";
import "./style/nameBox.scss";

function NameBox(props) {
  return (
    <div className="main-container-big" style={{zIndex:props.zIndex }}>
      <div className="left-small"></div>
      <div className="adriana-name">
        {props.navClass === "nav-open" ? (
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

      <div className="right-small">
        <nav className={props.navClass} onClick={props.toggleNav}>
          {props.navClass === "nav-open" ? (
            <>
              <div></div>
              <div></div>
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
  );
}

export default NameBox;
