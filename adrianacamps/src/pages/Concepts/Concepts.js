import React from "react";
import NameLayout from "../../layouts/nameLayout";

import "./style/concepts.scss";

//Components
import ContentContainer from "../../Components/ContentContainer";
import ProjectContent from "../../Components/ProjectContent/ProjectContent";

function Concepts() {
  return (
    <NameLayout>
      <main id="concepts-main">
        <ContentContainer>
          <div className="concepts-intro">
            <p>
              <u>Concepts for sale</u>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.st
              laborum.
            </p>
          </div>
          <ProjectContent />
          <ProjectContent />
        </ContentContainer>
      </main>
    </NameLayout>
  );
}

export default Concepts;
