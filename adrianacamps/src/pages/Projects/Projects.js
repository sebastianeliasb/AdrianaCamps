import React, { useEffect, useState } from "react";
import "../../configureAmplify";
import { API, Storage, graphqlOperation } from "aws-amplify";
import { listProjects } from "../../graphql/queries";
//Components
import ContentContainer from "../../Components/ContentContainer";
import ProjectContent from "../../Components/ProjectContent/ProjectContent";
import WebNav from "../../Components/WebNav";
//Layout
import MainPageLayout from "../../layouts/MainPageLayout";

async function fetchProjects(setProjects) {
  try {
    const projectData = await API.graphql(graphqlOperation(listProjects));
    const { items } = projectData.data.listProjects;
    const projectsWithImages = await Promise.all(
      items.map(async (project) => {
        if (project.projectImages) {
          let projectsImagesList = await Promise.all(
            project.projectImages
              .split(",")
              .map(async (image) => await Storage.get(image))
          );
          project.projectImages = projectsImagesList;
        }
        return project;
      })
    );
    setProjects(projectsWithImages);
  } catch (error) {
    console.log("error on fetching project", error);
  }
}

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects(setProjects);
  }, []);

  return (
    <>
      <MainPageLayout backgroundColor={"beige"}>
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
