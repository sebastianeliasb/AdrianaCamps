import React, { useState } from "react";
import "./style/newsInfo.scss";

function NewsInfo(props) {
  const [activeToggleIds, setActiveToggleIds] = useState([]);

  const testApi = [
    {
      id: 0,
      date: 2023,
      title: "Los mejores 300 profesionales para renovar la casa",
      sub_title: "Arquitectura y Diseño",
    },

    {
      id: 1,
      date: 2022,
      title: "Los mejores 100 profesionales para renovar la casa",
      sub_title: "Arquitectura y Diseño",
    },
  ];

  const toggleInfo = (id) => {
    if (activeToggleIds.includes(id)) {
      setActiveToggleIds(activeToggleIds.filter((i) => i !== id));
    } else {
      setActiveToggleIds([...activeToggleIds, id]);
    }
  };

  return (
    <>
      {testApi.map((data) => (
        <div className="news-info-toggle">
          {!activeToggleIds.includes(data.id) ? (
            <div className="closed-container">
              <div className="info-date">{data.date}</div>
              <button onClick={() => toggleInfo(data.id)}>+</button>
            </div>
          ) : (
            <div className="opened-container">
              <div className="opened-top">
                <div className="info-date">{data.date}</div>
                <button onClick={() => toggleInfo(data.id)}>—</button>
              </div>
              <div className="opened-bottom">
                <div className="opened-bottom-info">
                  {" "}
                  <div>{data.title}</div>
                  <div>{data.sub_title}</div>
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
