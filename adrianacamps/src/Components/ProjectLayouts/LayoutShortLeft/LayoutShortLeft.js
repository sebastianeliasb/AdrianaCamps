import React from "react";

function LayoutShortLeft({ sectionData }) {
  const layoutImages = sectionData.attributes.project_images.data;
  const infoText = sectionData.attributes.info_text;
  const imageTitle = sectionData.attributes.image_title;

  return (
    layoutImages.length > 0 && (
      <div className="layout_short_left">
        {layoutImages.map((image) => (
          <img
            className="image_short_left"
            key={image.id}
            src={image.attributes.url}
            alt={imageTitle}
          />
        ))}
        <span>{infoText ? infoText : ""}</span>
      </div>
    )
  );
}

export default LayoutShortLeft;
