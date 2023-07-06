import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
//style
import "./style/home.scss";
//components
import Carrusel from "../../Components/Carrusel";
//layout
import NameLayout from "../../layouts/nameLayout";
import { API, Storage, graphqlOperation } from "aws-amplify";
import { listHomes } from "../../graphql/queries";

function Home() {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/homes?populate=carrousel_image"
  );
  return (
    <NameLayout
      color="white"
      navColor="white"
      text={<span>Interior & Lighting Studio</span>}
      navClass="nav-open"
    >
      <Carrusel data={data} error={error} loading={loading} />
      <main className="home-main">
        <footer className="home-footer">
          <div>
            <span>
              <a href="https://www.instagram.com/adrianacamps.studio/">
                Instagram
              </a>
              —
              <a href="https://www.pinterest.es/adrianacampsstudio/">
                Pinterest
              </a>
              —
              <a href="https://www.linkedin.com/in/adriana-camps-3377b531/">
                LinkedIn
              </a>{" "}
            </span>
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
