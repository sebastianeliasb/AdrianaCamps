import React, { useEffect, useState } from "react";
import "../../configureAmplify";
import MainPageLayout from "../../layouts/MainPageLayout";

import "./style/concepts.scss";

//Components
import ContentContainer from "../../Components/ContentContainer";
import ConceptsContent from "../../Components/ConceptsContent";
import WebNav from "../../Components/WebNav";
import { API, Storage, graphqlOperation } from "aws-amplify";
import { listConcepts } from "../../graphql/queries";
import GraphQLAPI, { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

const initialState = [
  {
    conceptsImageMain: "",
    conceptImages: "",
    conceptTitle: "",
    conceptText: "",
  },
];

async function fetchConcepts(setConcept) {
  try {
    const conceptData = await API.graphql(graphqlOperation(listConcepts));
    const items = conceptData.data.listConcepts.items;

    const conceptWithImages = await Promise.all(
      items.map(async (concept) => {
        if (concept.conceptImages) {
          let conceptsImagesList = await Promise.all(
            concept.conceptImages.map(async (image) => await Storage.get(image))
          );
          concept.conceptsImageMain = await Storage.get(
            concept.conceptsImageMain
          );
          concept.conceptImages = conceptsImagesList;
        }
        return concept;
      })
    );
    setConcept(conceptWithImages);
  } catch (error) {
    console.log("error on fetching concepts", error);
  }
}

function Concepts() {
  const [concepts, setConcept] = useState(initialState);
  const [apiError, setApiError] = useState();

  useEffect(() => {
    fetchConcepts(setConcept);
  }, []);

  const errorMessage = apiError && (
    <p>
      {apiError.errors.map((error) => (
        <p>{error.message}</p>
      ))}
    </p>
  );

  const conceptText = concepts[1]?.conceptText; // get the aboutMe string from the studio object
  if (!concepts) {
    return null;
  }
  return (
    <MainPageLayout
      backgroundColorLeft={"white"}
      backgroundColorRight={"beige"}
    >
      {/* <img src={concept[1]?.conceptsImageMain} alt={"main"} /> */}
      <WebNav />
      {errorMessage}
      <ContentContainer>
        <div id="concepts">
          <div className="concepts-left">
            <div className="concepts-intro">
              <p>
                <u>Concepts for sale</u>
              </p>
              <p>
                {" "}
                {/* check if aboutMe includes the "*" symbol and add a line break if it does */}
                {conceptText && conceptText.includes("*") ? (
                  conceptText
                    .split("*")
                    .map((text, index) => <p key={index}>{text}</p>)
                ) : (
                  <p>{conceptText}</p>
                )}
              </p>
            </div>
          </div>
          <div className="concepts-right">
            <span></span>
            <div className="concepts-right-content">
              <ConceptsContent data={concepts} />
              {/* <ConceptsContent /> */}
            </div>
          </div>
        </div>
      </ContentContainer>
    </MainPageLayout>
  );
}

export default Concepts;
