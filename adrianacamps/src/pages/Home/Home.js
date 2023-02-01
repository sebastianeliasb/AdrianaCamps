import React, { useState } from "react";
import NameBox from "../../Components/nameBox";
import "./style/home.scss";
import Nav from "../../Components/nav";
import Carrusel from "../../Components/Carrusel";
import NameLayout from "../../layouts/nameLayout";

function Home() {
  return (
    <>
      <Carrusel />
      <NameLayout
        color={"white"}
        navColor={"white"}
        text={<span>Interior & Lighting Studio</span>}
        navClass={"nav-open"}
      >
        <main className="home-main">
          <footer>
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
    </>
  );
}

export default Home;
