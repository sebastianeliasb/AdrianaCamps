import React from "react";
import "./style/MainPageLayout.scss";

function MainPageLayout({ children, backgroundColor }) {
  const backgroundColors = {
    beige: "rgba(217, 199, 166, 0.5)",
    white: "rgba(255, 255, 255, 1)",
  };

  return (
    <main
      className="page-main"
      style={{
        backgroundColor: backgroundColors[backgroundColor],
      }}
    >
      {children}
    </main>
  );
}

export default MainPageLayout;
