import React, { useState } from "react";
import NameBox from "../../Components/nameBox";
import "./style/home.scss";
import Nav from "../../Components/nav";
import Carrusel from "../../Components/Carrusel";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Carrusel />

      <main className="home-main">
        {!isOpen ? (
          <>
            <NameBox
              text={<span>Interior & Lighting Studio</span>}
              toggleNav={toggleNav}
              navClass={"nav-open"}
            />
            <footer>
              <div>
                <span>Instagram — Pinterest — LinkedIn </span>
                <span>© Adriana Camps 2023 — All Rights reserved</span>
              </div>
              <div>
                <span>Design by Sauras Garriga</span>
              </div>
            </footer>
          </>
        ) : (
          <>
            <Nav toggleNav={toggleNav} />
          </>
        )}
      </main>
    </>
  );
}

export default Home;
