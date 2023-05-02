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

// const initialState = { name: '', subName: '', location: '', date: '', description: '', subDescription: '', client: '', photographer: '', surface: '', projectImages: '' }
const initialState = [
  {
    conceptsImageMain: "",
    conceptImages: "",
    conceptTitle: "",
    conceptText: "",
  },
];
function Concepts() {
  const [concepts, setConcept] = useState(initialState);
  const [apiError, setApiError] = useState();

  React.useEffect(() => {
    fetchConcepts();
  }, []);

  const fetchConcepts = async () => {
    try {
      // const conceptData = await GraphQLAPI.graphql({ query: listConcepts, authMode: GRAPHQL_AUTH_MODE.API_KEY })
      const conceptData = await API.graphql(graphqlOperation(listConcepts));
      const items = conceptData.data.listConcepts.items;

      const conceptWithImages = [];
      for (let index = 0; index < items.length; index++) {
        let concept = items[index];
        if (concept.conceptImages) {
          let conceptsImagesList = [];
          for (let idx = 0; idx < concept.conceptImages.length; idx++) {
            conceptsImagesList.push(
              await Storage.get(concept.conceptImages[idx])
            );
          }
          concept.conceptsImageMain = await Storage.get(
            concept.conceptsImageMain
          );
          concept.conceptImages = conceptsImagesList;
        }
        conceptWithImages.push(concept);
      }
      console.log("concept - ", conceptWithImages);
      setConcept(conceptWithImages);
      setApiError(null);
    } catch (error) {
      console.log("error on fetching concepts", error);
      setApiError(error);
    }
    // const conceptData = await API.graphql({ query: listConcepts });

    // const conceptWithImages = [];
    // for (let index = 0; index < items.length; index++) {
    //   let concept = items[index];
    //   if (concept.conceptImages) {
    //     let conceptsImagesList = [];
    //     for (let idx = 0; idx < concept.conceptImages.length; idx++) {
    //       conceptsImagesList.push(
    //         await Storage.get(concept.conceptImages[idx])
    //       );
    //     }
    //     concept.conceptsImageMain = await Storage.get(
    //       concept.conceptsImageMain
    //     );
    //     concept.conceptImages = conceptsImagesList;
    //   }
    //   conceptWithImages.push(concept);
    // }
    // setConcept(conceptWithImages);
  };

  const errorMessage = apiError && (
    <p>
      {apiError.errors.map((error) => (
        <p>{error.message}</p>
      ))}
    </p>
  );
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
              <p>{concepts[0].conceptText}</p>
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
