import React, { useEffect, useState } from "react";
import ContentContainer from "../../Components/ContentContainer";
import NewsInfo from "../../Components/NewsInfo/NewsInfo";
import MainPageLayout from "../../layouts/MainPageLayout";
import WebNav from "../../Components/WebNav";
import { useMediaQuery } from "react-responsive";
import useFetch from "../../hooks/useFetch";
import "./style/news.scss";
import _ from "lodash";

function News() {
  const { data, loading, error } = useFetch("api/news?populate=news_image");
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 600 });

  useEffect(() => {
    if (data && data.data.length > 0) {
      const allNews = data.data.map((news) => news);
      const latestNews = _.maxBy(
        allNews,
        (item) => new Date(item.attributes.date)
      );
      setSelectedNewsId(latestNews.id);
    }
  }, [data]);

  if (!data) {
    return null;
  }
  console.log(data);

  const allNews = data.data.map((news) => news);

  const selectNews = (id) => {
    setSelectedNewsId(id);
  };
  const selectedNews = _.find(allNews, { id: selectedNewsId });

  const backgroundColor = isMobile ? "beige" : "none";

  return (
    <MainPageLayout
      backgroundColorLeft="beige"
      backgroundColor={backgroundColor}
    >
      <WebNav />
      <ContentContainer>
        <div id="news">
          <div className="news-left">
            <img
              className="news-image"
              src={selectedNews?.attributes.news_image.data.attributes.url}
              alt={selectedNews?.attributes.main_title}
            />

            <div className="news-info-container">
              <div>{selectedNews?.attributes.date}</div>
              <div>{selectedNews?.attributes.main_title}</div>

              <div className="read-more">
                <a
                  href={
                    selectedNews?.attributes.news_link.startsWith("http")
                      ? selectedNews?.attributes.news_link
                      : `https://${selectedNews?.attributes.news_link}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer más
                </a>

                {console.log(selectedNews?.attributes.news_link)}
              </div>
            </div>
          </div>
          <div className="news-right">
            <span></span>
            <div className="news-right-content">
              <NewsInfo
                data={allNews}
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
