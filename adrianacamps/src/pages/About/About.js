import React, { useEffect, useState, useCallback } from "react";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
//style
import "./style/about.scss";
//layout
import MainPageLayout from "../../layouts/MainPageLayout";
//components
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import WebNav from "../../Components/WebNav";

function About() {
  const { data, loading, error } = useFetch(
    "api/studios?populate=studio_image&populate=clients"
  );

  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

  const trayectoria = data.data[0].attributes.trayectoria; // get the aboutMe string from the studio object
  const estudio = data.data[0].attributes.el_estudio; // get the aboutMe string from the studio object
  const clientes = data.data[0].attributes.clients.data; // get the aboutMe string from the studio object
  const studioImage = data.data[0].attributes.studio_image.data.attributes.url;

  return (
    <MainPageLayout
      backgroundColorLeft={"beige"}
      backgroundColorRight={"white"}
    >
      <WebNav />
      <ContentContainer>
        <main id="about-main">
          <div className="about-left">
            <div
              className="about-image-container"
              style={{
                backgroundImage: `url(${studioImage})`,
              }}
            ></div>
          </div>
          <div className="about-right">
            <span></span>
            <div className="about-right-content">
              <div
                className="about-image-container"
                style={{
                  backgroundImage: `url(${studioImage})`,
                }}
              />
              <div
                className="about-text-container"
                style={{ minHeight: "500px" }}
              >
                <u>TRAYECTORIA</u>

                <ReactMarkdown>{trayectoria}</ReactMarkdown>

                <br />
                <u>EL ESTUDIO</u>

                <ReactMarkdown>{estudio}</ReactMarkdown>

                <br />
                <u>CLIENTES</u>
                {clientes.map((client) => (
                  <React.Fragment key={client.id}>
                    <p>
                      {client.attributes.client_name}{" "}
                      <a
                        href={`http://${client.attributes.client_website}`}
                        target="_blank"
                      >
                        {client.attributes.client_website}
                      </a>
                    </p>
                  </React.Fragment>
                ))}
              </div>
              {/* <Footer /> */}
            </div>
          </div>
        </main>
      </ContentContainer>
    </MainPageLayout>
  );
}

export default About;
