import React from "react";
import { useLocation } from "react-router-dom";
import ContentContainer from "../../Components/ContentContainer";
import WebNav from "../../Components/WebNav";
import ReactMarkdown from "react-markdown";
import {
  LayoutFullScreen,
  LayoutLongLeft,
  LayoutLongRight,
  LayoutMediumLeft,
  LayoutMediumRight,
  LayoutShortLeft,
  LayoutShortRight,
  Layout3Row,
} from "../../Components/ProjectLayouts";

import MainPageLayout from "../../layouts/MainPageLayout";
import "./style/projectItem.scss";

function ProjectItem() {
  const location = useLocation();
  const data = location.state;
  const {
    project_title,
    project_location,
    main_description,
    project_date,
    client,
    photographer,
    surface,
    collaborators,
    main_image: {
      data: {
        attributes: { url: main_image_url },
      },
    },
    layouts: { data: project_organization },
  } = data.project.attributes;
  const projectDate = new Date(project_date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const backgroundColor = window.innerWidth <= 600 ? "beige" : "none";

  const renderLayoutComponent = (layoutType, sectionData) => {
    const { Sections } = sectionData.attributes;

    switch (layoutType) {
      case "Layout Full Screen":
        return (
          <LayoutFullScreen section={Sections} sectionData={sectionData} />
        );
      case "Layout Long Left":
        return <LayoutLongLeft section={Sections} sectionData={sectionData} />;
      case "Layout Long Right":
        return <LayoutLongRight section={Sections} sectionData={sectionData} />;
      case "Layout Middle Left":
        return (
          <LayoutMediumLeft section={Sections} sectionData={sectionData} />
        );
      case "Layout Middle Right":
        return (
          <LayoutMediumRight section={Sections} sectionData={sectionData} />
        );
      case "Layout Short Left":
        return <LayoutShortLeft section={Sections} sectionData={sectionData} />;
      case "Layout Short Right":
        return (
          <LayoutShortRight section={Sections} sectionData={sectionData} />
        );
      case "Layout 3 Row":
        return <Layout3Row section={Sections} sectionData={sectionData} />;
      // Add more cases for other layout types
      default:
        return null;
    }
  };

  return (
    <>
      <WebNav />
      <MainPageLayout
        backgroundColorLeft="white"
        backgroundColorRight="beige"
        backgroundColor={backgroundColor}
      >
        <ContentContainer>
          <div className="project-item-body">
            <div className="first_section">
              <div className="project-content-left">
                <img src={main_image_url} alt="main" />
              </div>

              <div className="project-content-right">
                <div className="project-detail">
                  <div className="project-info">
                    <span>{project_title}</span>
                    <span>{project_location}</span>
                    <span>{projectDate}</span>
                    <ReactMarkdown>{main_description}</ReactMarkdown>
                  </div>
                  <div className="project-aspects">
                    {client && <span>Cliente: {client}</span>}
                    {photographer && <span>Fotografo: {photographer}</span>}
                    {surface && <span>Superficie: {`${surface}m²`}</span>}
                    {collaborators && (
                      <span>Colaboradores: {collaborators}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Render other sections */}
            {project_organization.map((sectionData) => (
              <div key={sectionData.id}>
                {renderLayoutComponent(
                  sectionData.attributes.Layouts,
                  sectionData
                )}
              </div>
            ))}
          </div>
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default ProjectItem;
