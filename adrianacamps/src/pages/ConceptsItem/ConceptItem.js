import React from "react";
import { useLocation } from "react-router-dom";
import ContentContainer from "../../Components/ContentContainer";
import WebNav from "../../Components/WebNav";
import MainPageLayout from "../../layouts/MainPageLayout";
import ReactMarkdown from "react-markdown";

import "../ProjectItem/style/projectItem.scss";
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

function ConceptItem() {
  const location = useLocation();
  const data = location.state;

  const {
    concept_title,
    concept_location,
    main_description,
    surface,
    main_image: {
      data: [{ attributes: main_image_attributes }],
    },
    layouts: { data: project_organization },
  } = data.concept.attributes;

  const w = document.documentElement.clientWidth || window.innerWidth;
  let backgroundColor;
  if (w <= 600) {
    backgroundColor = "beige";
  } else {
    backgroundColor = "none";
  }

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
        backgroundColorLeft={"white"}
        backgroundColorRight={"beige"}
        backgroundColor={backgroundColor}
      >
        <ContentContainer>
          <div className="project-item-body">
            <div className="first_section">
              <div className="project-content-left">
                <img
                  src={`http://localhost:1337${main_image_attributes.url}`}
                  alt="main"
                />
              </div>

              <div className="project-content-right">
                <div className="project-detail">
                  <div className="project-info">
                    <span>{concept_title}</span>
                    <span>{concept_location}</span>
                    <ReactMarkdown>{main_description}</ReactMarkdown>
                  </div>
                  <div className="project-aspects">
                    {surface && <span>Superficie: {`${surface}m²`}</span>}
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

export default ConceptItem;
