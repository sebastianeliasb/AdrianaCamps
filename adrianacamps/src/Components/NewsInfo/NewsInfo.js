import React, { useState } from "react";
import classNames from "classnames";
import "./style/newsInfo.scss";

function NewsInfo(props) {
  const [activeToggleIds, setActiveToggleIds] = useState([]);

  const toggleInfo = (id) => {
    if (activeToggleIds.includes(id)) {
      setActiveToggleIds(activeToggleIds.filter((i) => i !== id));
    } else {
      setActiveToggleIds([...activeToggleIds, id]);
    }
  };

  const onClickEachItem = (id, index) => {
    props.selectNews(id, index);
  };

  return (
    <>
      {props.data.map((data, index) => (
        <div className="news-info-toggle">
          {!activeToggleIds.includes(data.id) ? (
            <div className="closed-container">
              <div className="info-date">{data.newsDate}</div>
              <button onClick={() => toggleInfo(data.id)}>+</button>
            </div>
          ) : (
            <div className="opened-container">
              <div className="opened-top">
                <div className="info-date">{data.newsDate}</div>
                <button onClick={() => toggleInfo(data.id)}>—</button>
              </div>
              <div
                className={classNames({
                  "opened-bottom": true,
                  "opened-bottom-active": props.selectedNewsID === data.id,
                })}
              >
                <div
                  className="opened-bottom-info"
                  onClick={() => onClickEachItem(data.id, index)}
                >
                  {" "}
                  <div>{data.newsTitle}</div>
                  <div>{data.newsSource}</div>
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
