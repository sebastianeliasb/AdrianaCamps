import React from "react";

function LayoutMediumLeft({ sectionData }) {
  const layoutImages = sectionData.attributes.project_images.data;
  const infoText = sectionData.attributes.info_text;
  const imageTitle = sectionData.attributes.image_title;
  const shouldShowSpan = infoText !== null && infoText !== "";
  return (
    layoutImages.length > 0 && (
      <div className="layout_medium_left">
        {layoutImages.map((image) => (
          <img
            className="image_medium_left"
            key={image.id}
            src={image.attributes.url}
            alt={imageTitle}
          />
        ))}
        const shouldShowSpan = infoText !== null && infoText !== "";
      </div>
    )
  );
}

export default LayoutMediumLeft;
