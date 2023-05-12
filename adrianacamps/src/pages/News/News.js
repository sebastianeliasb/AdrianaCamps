import React, { useEffect, useState } from "react";
import ContentContainer from "../../Components/ContentContainer";
import NewsInfo from "../../Components/NewsInfo/NewsInfo";
import MainPageLayout from "../../layouts/MainPageLayout";
import WebNav from "../../Components/WebNav";
import { useMediaQuery } from "react-responsive";

import "./style/news.scss";
import { API, Storage } from "aws-amplify";
import { listNews } from "../../graphql/queries";
import _ from "lodash";

async function fetchNews(setNews) {
  const newsData = await API.graphql({ query: listNews });
  const { items } = newsData.data.listNews;
  const newsWithImages = await Promise.all(
    items.map(async (news) => {
      if (news.newsImage) {
        news.newsImage = await Storage.get(news.newsImage);
      }
      return news;
    })
  );
  setNews(newsWithImages);
}

function News() {
  const [news, setNews] = useState([]);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  useEffect(() => {
    fetchNews(setNews);
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const latestNews = _.maxBy(news, (item) => {
        const [month, day, year] = item.newsDate.split("/");
        return new Date(year, month - 1, day);
      });
      setSelectedNewsId(latestNews.id);
    }
  }, [news]);

  const selectNews = (id) => {
    setSelectedNewsId(id);
  };

  const selectedNews = _.find(news, { id: selectedNewsId });

  const isMobile = useMediaQuery({ maxWidth: 600 });
  const backgroundColor = isMobile ? "beige" : "none";

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
                backgroundImage: `url(${selectedNews?.newsImage})`,
              }}
            ></div>

            <div className="news-info-container">
              <div>{selectedNews?.newsDate}</div>
              <div>{selectedNews?.newsTitle}</div>

              <div className="read-more">
                <a href={selectedNews?.newsLink}>Leer mas</a>
              </div>
            </div>
          </div>
          <div className="news-right">
            <span></span>
            <div className="news-right-content">
              <NewsInfo
                data={news}
                selectNews={selectNews}
                selectedNewsId={selectedNewsId}
              />
            </div>
          </div>
        </div>
      </ContentContainer>
    </MainPageLayout>
  );
}

export default News;
