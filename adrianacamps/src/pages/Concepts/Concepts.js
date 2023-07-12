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
    "api/concepts?populate=main_image&populate=layouts.project_images"
  );

  if (loading) return <p>{loading}</p>;
  if (error) return <p>{error}</p>;

  // console.log(data);
  let mainDescription = null;

  for (let i = 0; i < data.data.length; i++) {
    const project = data.data[i];
    if (project.attributes.concept_page_intro !== null) {
      mainDescription = project.attributes.concept_page_intro;
      break; // Stop the loop once the element is found
    }
  }
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
