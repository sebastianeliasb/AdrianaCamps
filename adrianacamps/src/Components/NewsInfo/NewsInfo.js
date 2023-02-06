import React, { useState } from "react";
import "./style/newsInfo.scss";

function NewsInfo(props) {
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  const infoDate = [2023, 2022, 2021];

  const testApi = [
    {
      date: 2023,
      title: "Los mejores 300 profesionales para renovar la casa",
      sub_title: "Arquitectura y Diseño",
    },

    {
      date: 2022,
      title: "Los mejores 100 profesionales para renovar la casa",
      sub_title: "Arquitectura y Diseño",
    },
  ];

  const toggleInfo = () => {
    console.log("HOLA");
    setInfoIsOpen(!infoIsOpen);
  };
  return (
    <>
      {testApi.map((data, idx) => (
        <div className="news-info-toggle">
          {!infoIsOpen ? (
            <div className="closed-container">
              <div className="info-date">{data.date}</div>
              <button onClick={toggleInfo}>+</button>
            </div>
          ) : (
            <div className="opened-container">
              <div className="opened-top">
                <div className="info-date">{data.date}</div>
                <button onClick={toggleInfo}>—</button>
              </div>
              <div className="opened-bottom">
                <div className="opened-bottom-info">
                  {" "}
                  <div>{data.title}</div>
                  <div>A{data.sub_title}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default NewsInfo;
