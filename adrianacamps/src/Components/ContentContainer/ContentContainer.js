import React from "react";
import "./style/contentContainer.scss";
function ContentContainer({ children }) {
  return <div className="page-content-container">{children}</div>;
}

export default ContentContainer;
