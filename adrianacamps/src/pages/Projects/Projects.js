import React from "react";
import ContentContainer from "../../Components/ContentContainer";
import ProjectContent from "../../Components/ProjectContent/ProjectContent";
import NameLayout from "../../layouts/nameLayout";
import "./style/projects.scss";

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
