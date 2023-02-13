import React from "react";

//Components
import ContentContainer from "../../Components/ContentContainer";
import ProjectContent from "../../Components/ProjectContent/ProjectContent";
//Layout
import MainPageLayout from "../../layouts/MainPageLayout";
//Images
import projectImageMain1 from "../../assets/project_image.jpg";
import projectImageMain2 from "../../assets/news_image.jpg";

function Projects() {
  const fakeData = [
    {
      id: "0",
      projectInfo: [
        {
          name: "Project number1",
          location: "Glessen,Germany",
          date: "2017-2020",
          description:
            "Designed for a site formerly occupied by a mews house, located between parallel rows of townhouses in the town of Giessen in central Germany, this project was always going to be about taking a set of established architectural principles and applying them to the creation of an enclosed domestic universe  of Giessen in central Germany, this project was always going to be about taking a set of established architectural principles and applying them to the creation of an enclosed domestic universe. of Giessen in central Germany, this project was always going to be about taking a set of established architectural principles and applying them to the creation of an enclosed domestic universe. of Giessen in central Germany, this project was always going to be about taking a set of established architectural principles and applying them to the creation of an enclosed domestic universe.",
          client: "Lorem Ipsum",
          photografer: "Lorem Ipsum",
          surface: "Lorem Ipsum",
        },
      ],
      projectImages: [
        {
          projectImageMain: projectImageMain1,
          projectImage1: null,
          projectImage2: null,
          projectImage3: null,
          projectImage4: null,
          projectImage5: null,
          projectImage6: null,
          projectImage7: null,
          projectImage8: null,
          projectImage9: null,
          projectImage10: null,
        },
      ],
    },
    {
      id: "1",
      projectInfo: [
        {
          name: "Project number2",
          location: "Glessen,Germany",
          date: "2017-2020",
          description: "",
          client: "Lorem Ipsum",
          photografer: "Lorem Ipsum",
          surface: "Lorem Ipsum",
        },
      ],
      projectImages: [
        {
          projectImageMain: projectImageMain2,
          projectImage1: null,
          projectImage2: null,
          projectImage3: null,
          projectImage4: null,
          projectImage5: null,
          projectImage6: null,
          projectImage7: null,
          projectImage8: null,
          projectImage9: null,
          projectImage10: null,
        },
      ],
    },
  ];

  return (
    <>
      <MainPageLayout backgroundColor={"beige"}>
        <ContentContainer>
          <ProjectContent data={fakeData} />
          {/* <ProjectContent /> */}
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default Projects;
