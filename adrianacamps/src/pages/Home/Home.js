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

      {!isOpen ? (
        <>
          <NameBox
            color={"white"}
            navColor={"white"}
            text={<span>Interior & Lighting Studio</span>}
            toggleNav={toggleNav}
            navClass={"nav-open"}
          />
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
        </>
      ) : (
        <>
          <Nav toggleNav={toggleNav} />
        </>
      )}
    </>
  );
}

export default Home;
