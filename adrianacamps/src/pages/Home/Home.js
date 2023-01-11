import React from "react";
import "./style/home.scss";

function Home() {
  return (
    <>
      <main className="home-main">
        <div className="carrusel">
          {" "}
          <div className="adriana-name">
            <div>ADRIANA</div>
            <span>Interior & Lighting Studio</span>
            <div>CAMPS</div>
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
