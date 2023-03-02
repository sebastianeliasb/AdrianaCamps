import React from "react";
//style
import "./style/home.scss";
//components
import Carrusel from "../../Components/Carrusel";
//layout
import NameLayout from "../../layouts/nameLayout";

function Home() {
  return (
    <NameLayout
      color="white"
      navColor="white"
      text={<span>Interior & Lighting Studio</span>}
      navClass="nav-open"
    >
      <Carrusel />
      <main className="home-main">
        <footer className="home-footer">
          <div>
            <span>Instagram — Pinterest — LinkedIn </span>
            <span>© Adriana Camps 2023 — All Rights reserved</span>
          </div>
          <div>
            <span>Design by Sauras Garriga</span>
          </div>
        </footer>
      </main>
    </NameLayout>
  );
}

export default Home;
