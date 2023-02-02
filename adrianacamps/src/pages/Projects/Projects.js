import React from "react";

//Components
import ContentContainer from "../../Components/ContentContainer";
import ProjectContent from "../../Components/ProjectContent/ProjectContent";
//Layout
import NameLayout from "../../layouts/nameLayout";
//Style
import "./style/projects.scss";

function Projects() {
  return (
    <>
      <NameLayout zindex={2} />
      <main id="projects-main">
        <ContentContainer>
          <ProjectContent />
          <ProjectContent />
        </ContentContainer>
      </main>
    </>
  );
}

export default Projects;
