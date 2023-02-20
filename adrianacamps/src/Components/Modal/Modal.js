import React, { useState, useCallback } from "react";
import "./style/modal.scss";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
function Modal({ show, toggleModal, projects, ...props }) {
  return (
    <>
      {show ? (
        <>
          <div onClick={() => toggleModal()} className="modal-backdrop">
            {" "}
          </div>
          <div className="modal-body">
            <div className="modal-title">
              <span>{props.modalTitle}</span>
            </div>
            <div className="modal-nav">{props.navTabs}</div>
            <div className="modal-info-container">
              <SimpleMDE style={{ width: "100% " }} />
            </div>
            <button>Confirm</button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
