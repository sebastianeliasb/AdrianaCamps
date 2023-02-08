import React from "react";

//Components
import ContentContainer from "../../Components/ContentContainer";
import ProjectContent from "../../Components/ProjectContent/ProjectContent";
import MainPageLayout from "../../layouts/MainPageLayout";
//Layout
import NameLayout from "../../layouts/nameLayout";

function Projects({ ...color }) {
  console.log(color);
  return (
    <>
      <NameLayout>
        <MainPageLayout backgroundColor={"beige"}>
          <ContentContainer>
            <ProjectContent />
            <ProjectContent />
          </ContentContainer>
        </MainPageLayout>
      </NameLayout>
    </>
  );
}

export default Projects;
