import React, { useEffect, useState } from "react";
//style
import "./style/home.scss";
//components
import Carrusel from "../../Components/Carrusel";
//layout
import NameLayout from "../../layouts/nameLayout";
import { API, Storage, graphqlOperation } from "aws-amplify";
import { listHomes } from "../../graphql/queries";

function Home() {
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    fetchHomes();
  }, []);

  async function fetchHomes() {
    const homeData = await API.graphql(graphqlOperation(listHomes));
    const { items } = homeData.data.listHomes;
    console.log("items - ", items);
    const homeWithImages = [];
    for (let index = 0; index < items.length; index++) {
      let home = items[index];
      if (home.carrouselImages) {
        let homeImagesList = [];
        for (let idx = 0; idx < home.carrouselImages.length; idx++) {
          homeImagesList.push(await Storage.get(home.carrouselImages[idx]));
        }
        home.carrouselImages = homeImagesList;
      }
      homeWithImages.push(home);
    }
    setHomes(homeWithImages);
  }

  return (
    <NameLayout
      color="white"
      navColor="white"
      text={<span>Interior & Lighting Studio</span>}
      navClass="nav-open"
    >
      <Carrusel data={homes} />
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
