import React, { useEffect, useState } from "react";
import newsImage from "../../assets/news_image.jpg";
import ContentContainer from "../../Components/ContentContainer";
import NewsInfo from "../../Components/NewsInfo/NewsInfo";
import MainPageLayout from "../../layouts/MainPageLayout";
import WebNav from "../../Components/WebNav";

import "./style/news.scss";
import { API, Storage } from "aws-amplify";
import { listNews } from "../../graphql/queries";

function News() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(0);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    const newsData = await API.graphql({ query: listNews });
    const { items } = newsData.data.listNews;
    const newsWithImages = [];
    for (let index = 0; index < items.length; index++) {
      let news = items[index];
      if (news.newsImage) {
        news.newsImage = await Storage.get(news.newsImage);
      }
      newsWithImages.push(news);
    }
    console.log("news - ", newsWithImages);
    setNews(newsWithImages);
  }

  const w = document.documentElement.clientWidth || window.innerWidth;
  let backgroundColor;
  if (w <= 600) {
    backgroundColor = "beige";
  } else {
    backgroundColor = "none";
  }

  const selectNews = (id, index) => {
    setSelectedNews(index);
  };

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
              style={{
                backgroundImage: `url(${news[selectedNews]?.newsImage})`,
              }}
            ></div>

            <div className="news-info-container">
              <div>{news[selectedNews]?.newsDate}</div>
              <div>{news[selectedNews]?.newsTitle}</div>
              <div>{news[selectedNews]?.newsLink}</div>
            </div>
          </div>
          <div className="news-right">
            <span></span>
            <div className="news-right-content">
              <NewsInfo
                data={news}
                selectNews={selectNews}
                selectedNewsID={news[selectedNews]?.id}
              />
            </div>
          </div>
        </div>
      </ContentContainer>
    </MainPageLayout>
  );
}

export default News;
