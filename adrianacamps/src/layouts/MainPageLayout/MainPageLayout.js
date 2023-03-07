import React from "react";
import "./style/MainPageLayout.scss";
import NameLayout from "../nameLayout/";

function MainPageLayout({
  children,
  backgroundColor,
  backgroundColorLeft,
  backgroundColorRight,
  ...props
}) {
  const backgroundColors = {
    beige: "rgba(217, 199, 166, 0.5)",
    white: "rgba(255, 255, 255, 1)",
  };

  return (
    <NameLayout events={props.events}>
      <main
        className="page-main"
        style={{
          backgroundColor: backgroundColors[backgroundColor],
        }}
      >
        <div
          className="main-layout-left"
          style={{
            backgroundColor: backgroundColors[backgroundColorLeft],
          }}
        ></div>
        <div
          className="main-layout-right"
          style={{
            backgroundColor: backgroundColors[backgroundColorRight],
          }}
        ></div>
        {children}
      </main>
    </NameLayout>
  );
}

export default MainPageLayout;
