import React from "react";

function Layout2Pics({ sectionData }) {
  const layoutImages = sectionData.attributes.project_images.data;
  const infoText = sectionData.attributes.info_text;
  const imageTitle = sectionData.attributes.image_title;
  //   const shouldShowSpan = infoText !== null && infoText !== "";
  return (
    <div className="layout_medium_right">
      {layoutImages.map((image) => (
        <img
          className="image_medium_right"
          key={image.id}
          src={image.attributes.url}
          alt={imageTitle}
        />
      ))}
      {/* {shouldShowSpan || window.innerWidth > 768 ? (
        <span className="info-text">{infoText}</span>
      ) : null} */}
    </div>
  );
}

export default Layout2Pics;
