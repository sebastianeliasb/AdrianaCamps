import React from "react";
import MainPageLayout from "../../layouts/MainPageLayout";

import "./style/concepts.scss";

//Components
import ContentContainer from "../../Components/ContentContainer";
import ConceptsContent from "../../Components/ConceptsContent";
import WebNav from "../../Components/WebNav";

function Concepts() {
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.st
                laborum.
              </p>
            </div>
          </div>
          <div className="concepts-right">
            <span></span>
            <div className="concepts-right-content">
              <ConceptsContent />
              <ConceptsContent />
            </div>
          </div>
        </div>
      </ContentContainer>
    </MainPageLayout>
  );
}

export default Concepts;
