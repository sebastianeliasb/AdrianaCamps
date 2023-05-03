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

  const onClickEachItem = (id) => {
    props.selectNews(id);
  };

  const groupedData = props.data.reduce((acc, item) => {
    const year = item.newsYear;
    const group = acc.find((group) => group.year === year);
    // const id = item.id

    if (group) {
      group.items.push(item);
    } else {
      acc.push({ year, items: [item] });
    }

    return acc;
  }, []);

  groupedData.sort((a, b) => b.year - a.year);

  return (
    <>
      {groupedData.map((group, index) => (
        <div className="news-info-toggle" key={index}>
          {!activeToggleIds.includes(group.year) ? (
            <div className="closed-container">
              <div className="info-date">{group.year}</div>
              <button onClick={() => toggleInfo(group.year)}>+</button>
            </div>
          ) : (
            <div className="opened-container">
              <div className="opened-top">
                <div className="info-date">{group.year}</div>
                <button onClick={() => toggleInfo(group.year)}>—</button>
              </div>
              {group.items.map((item, index) => (
                <div
                  className={classNames({
                    "opened-bottom": true,
                    "opened-bottom-active": props.selectedNewsId === item.id,
                  })}
                  key={index}
                >
                  <div
                    className="opened-bottom-info"
                    onClick={() => onClickEachItem(item.id, index)}
                  >
                    <div>{item.newsTitle}</div>
                    <div>{item.newsSource}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default NewsInfo;
