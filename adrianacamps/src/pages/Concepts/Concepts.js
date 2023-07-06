import React from "react";
import MainPageLayout from "../../layouts/MainPageLayout";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";

import "./style/concepts.scss";

//Components
import ContentContainer from "../../Components/ContentContainer";
import ConceptsContent from "../../Components/ConceptsContent";

import WebNav from "../../Components/WebNav";

function Concepts() {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/concepts?populate=main_image&populate=layouts.project_images&populate=concept_intro"
  );

  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

  // console.log(data);
  const mainDescription =
    data.data[0].attributes.concept_intro.data.attributes.page_desscription;
  console.log(mainDescription);
  return (
    <MainPageLayout
      backgroundColorLeft={"white"}
      backgroundColorRight={"beige"}
    >
      <WebNav />
      <ContentContainer>
        <div id="concepts">
          <div className="concepts-left">
            <div className="concepts-intro">
              <p>
                <u>Concepts for sale</u>
              </p>
              <ReactMarkdown>{mainDescription}</ReactMarkdown>
            </div>
          </div>
          <div className="concepts-right">
            <span></span>
            <div className="concepts-right-content">
              <ConceptsContent data={data} loading={loading} error={error} />
            </div>
          </div>
        </div>
      </ContentContainer>
    </MainPageLayout>
  );
}

export default Concepts;
