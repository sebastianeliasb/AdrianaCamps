import React, { useEffect, useState, useCallback } from "react";
import useFetch from "../../hooks/useFetch";
import "../../configureAmplify";
import { API, Storage, graphqlOperation } from "aws-amplify";
import { listProjects } from "../../graphql/queries";
//Components
import ContentContainer from "../../Components/ContentContainer";
import ProjectContent from "../../Components/ProjectContent/ProjectContent";
import WebNav from "../../Components/WebNav";
//Layout
import MainPageLayout from "../../layouts/MainPageLayout";

function Projects() {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/projects?populate=main_image&populate=layouts.project_images"
  );
  return (
    <>
      <MainPageLayout backgroundColor={"beige"}>
        <WebNav />
        <ContentContainer>
          <div className="project-body">
            <ProjectContent data={data} loading={loading} error={error} />
          </div>
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default Projects;
