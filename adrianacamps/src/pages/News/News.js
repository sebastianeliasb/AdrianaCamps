import React from "react";
import newsImage from "../../assets/news_image.jpg";
import ContentContainer from "../../Components/ContentContainer";
import NewsInfo from "../../Components/NewsInfo/NewsInfo";
import NameLayout from "../../layouts/nameLayout";
import MainPageLayout from "../../layouts/MainPageLayout";

import "./style/news.scss";

function News() {
  return (
    <NameLayout>
      <MainPageLayout backgroundColor="beige">
        <ContentContainer>
          <div
            className="news-image"
            style={{ backgroundImage: `url(${newsImage})` }}
          ></div>
          <div className="news-info-container">
            <div>15 Novembre 2023</div>
            <div>LOS MEJORES 300 INTERIORISTAS</div>
            <div>Leer mas</div>
          </div>
          <NewsInfo />
        </ContentContainer>
      </MainPageLayout>
    </NameLayout>
  );
}

export default News;
