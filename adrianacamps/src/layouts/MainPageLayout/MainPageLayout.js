import React from "react";
import "./style/MainPageLayout.scss";
import NameLayout from "../nameLayout/";

function MainPageLayout({ children, backgroundColor, ...props }) {
  const backgroundColors = {
    beige: "rgba(217, 199, 166, 0.5)",
    white: "rgba(255, 255, 255, 1)",
  };

  return (
    <NameLayout>
      <main
        className="page-main"
        style={{
          backgroundColor: backgroundColors[backgroundColor],
        }}
      >
        {children}
      </main>
    </NameLayout>
  );
}

export default MainPageLayout;
