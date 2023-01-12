import React from "react";
import "./style/home.scss";

function Home() {
  const handleNavTransform = () => {};
  return (
    <>
      <main className="home-main">
        <div className="carrusel">
          {" "}
          <div className="main-container-big">
            <div className="left-small"></div>
            <div className="adriana-name">
              <div>ADRIANA</div>
              <span>Interior & Lighting Studio</span>
              <div>CAMPS</div>
            </div>
            <div className="right-small">
              <nav className="nav">
                <div></div>
                <div></div>
              </nav>
            </div>
          </div>
          <div className="copy-info">
            <span>Instagram — Pinterest — LinkedIn</span>
            <span>Design by Sauras Garriga</span>
            <span>© ADRIANA CAMPS 2023 — All rights reserved.</span>
          </div>
        </div>
        <div className="backdrop"></div>
      </main>
    </>
  );
}

export default Home;
