import React, { useEffect, useState } from "react";
import newsImage from "../../assets/news_image.jpg";
import ContentContainer from "../../Components/ContentContainer";
import NewsInfo from "../../Components/NewsInfo/NewsInfo";
import MainPageLayout from "../../layouts/MainPageLayout";
import WebNav from "../../Components/WebNav";

import "./style/news.scss";
import { API } from "aws-amplify";
import { listNews } from "../../graphql/queries";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    const newsData = await API.graphql({ query: listNews });
    setNews(newsData);
  }

  const w = document.documentElement.clientWidth || window.innerWidth;
  let backgroundColor;
  if (w <= 600) {
    backgroundColor = "beige";
  } else {
    backgroundColor = "none";
  }
  return (
    <MainPageLayout
      backgroundColorLeft={"beige"}
      backgroundColor={backgroundColor}
    >
      <WebNav />
      <ContentContainer>
        <div id="news">
          <div className="news-left">
            <div
              className="news-image"
              style={{ backgroundImage: `url(${newsImage})` }}
            ></div>

            <div className="news-info-container">
              <div>15 Novembre 2023</div>
              <div>LOS MEJORES 300 INTERIORISTAS</div>
              <div className="read-more">Leer mas</div>
            </div>
          </div>
          <div className="news-right">
            <span></span>
            <div className="news-right-content">
              <NewsInfo />
            </div>
          </div>
        </div>
      </ContentContainer>
    </MainPageLayout>
  );
}

export default News;
