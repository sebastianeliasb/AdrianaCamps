import React from "react";
import "../../configureAmplify";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listProjects } from "../../graphql/queries";
//Components
import ContentContainer from "../../Components/ContentContainer";
import ProjectContent from "../../Components/ProjectContent/ProjectContent";
import WebNav from "../../Components/WebNav";
//Layout
import MainPageLayout from "../../layouts/MainPageLayout";
//Images
import projectImageMain1 from "../../assets/project_image.jpg";
import projectImageMain2 from "../../assets/news_image.jpg";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const projectData = await API.graphql({
      query: listProjects,
    });
    setProjects(projectData.data.listProjects.items);
  }

  // console.log(projects);

  return (
    <>
      <MainPageLayout backgroundColor={"beige"}>
        <WebNav />
        <ContentContainer>
          <ProjectContent data={projects} />
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default Projects;
