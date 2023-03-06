import React from "react";
import Footer from "../Footer";
//style
import "./style/contentContainer.scss";
function ContentContainer({ children }) {
  return (
    <>
      <div className="page-content-container">
        {children}
        <Footer />
      </div>
    </>
  );
}

export default ContentContainer;
