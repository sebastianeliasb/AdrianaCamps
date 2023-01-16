import React, { useState } from "react";
import "./style/nameBox.scss";

function NameBox(props) {
  return (
    <div className="main-container-big">
      <div className="left-small"></div>
      <div className="adriana-name">
        <div>ADRIANA</div>
        {props.text}
        <div>CAMPS</div>
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
