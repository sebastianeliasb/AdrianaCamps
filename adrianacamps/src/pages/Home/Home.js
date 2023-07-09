import React from "react";
import useFetch from "../../hooks/useFetch";
import "./style/home.scss";
import Carrusel from "../../Components/Carrusel";
import NameLayout from "../../layouts/nameLayout";

const Home = () => {
  const { data, loading, error } = useFetch(
    "/api/homes?populate=carrousel_image"
  );

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/adrianacamps.studio/",
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.es/adrianacampsstudio/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adriana-camps-3377b531/",
    },
  ];

  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

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
              {socialLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a href={link.url} rel="noopener noreferrer" target="_blank">
                    {link.name}
                  </a>
                  {index !== socialLinks.length - 1 && " — "}
                </React.Fragment>
              ))}
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
};

export default Home;
