import React from "react";
import "../../configureAmplify";
import { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
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
    const { items } = projectData.data.listProjects;
    const projectWithImages = await Promise.all(
      items.map(async (project) => {
        if (project.projectImages) {
          project.projectImages = await Storage.get(project.projectImages);
        }
        return project;
      })
    );
    setProjects(projectWithImages);
  }

  const w = document.documentElement.clientWidth || window.innerWidth;
  let pointerEvent;
  if (w <= 600) {
    pointerEvent = "all";
  } else {
    pointerEvent = "none";
  }

  return (
    <>
      <MainPageLayout backgroundColor={"beige"} events={pointerEvent}>
        <WebNav />
        <ContentContainer>
          <div className="project-body">
            <ProjectContent data={projects} />
          </div>
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default Projects;
