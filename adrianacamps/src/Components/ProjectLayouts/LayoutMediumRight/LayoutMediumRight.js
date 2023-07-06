import React from "react";

function LayoutMediumRight({ sectionData }) {
  const layoutImages = sectionData.attributes.project_images.data;
  const infoText = sectionData.attributes.info_text;
  const imageTitle = sectionData.attributes.image_title;

  return (
    <div className="layout_medium_right">
      {layoutImages.map((image) => (
        <img
          className="image_medium_right"
          key={image.id}
          src={`http://localhost:1337${image.attributes.url}`}
          alt={imageTitle}
        />
      ))}
      <span>{infoText ? infoText : ""}</span>
    </div>
  );
}

export default LayoutMediumRight;
