import React from "react";
import "./style/uploadImagesbtn.scss";

function UploadImagebtn(props) {
  return (
    <>
      {" "}
      <button
        id={props.id}
        className="upload-image-btn"
        onClick={props.onClick}
      >
        {props.btnText}
      </button>
    </>
  );
}

export default UploadImagebtn;
