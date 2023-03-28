import React, {useEffect, useState} from "react";
import newsImage from "../../assets/news_image.jpg";
import ContentContainer from "../../Components/ContentContainer";
import NewsInfo from "../../Components/NewsInfo/NewsInfo";
import MainPageLayout from "../../layouts/MainPageLayout";

import "./style/news.scss";
import {API} from "aws-amplify";
import {listNews} from "../../graphql/queries";

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    async function fetchNews() {
        const newsData = await API.graphql({query: listNews});
        setNews(newsData)
    }

    return (
        <MainPageLayout backgroundColor="beige">
            <ContentContainer>
                <div id="news">
                    <div
                        className="news-image"
                        style={{backgroundImage: `url(${newsImage})`}}
                    ></div>
                    <div className="news-info-container">
                        <div>15 Novembre 2023</div>
                        <div>LOS MEJORES 300 INTERIORISTAS</div>
                        <div>Leer mas</div>
                    </div>
                    <NewsInfo/>
                </div>
            </ContentContainer>
        </MainPageLayout>
    );
}

export default News;
