import React from "react";

function LayoutLongRight({ sectionData }) {
  const layoutImages = sectionData.attributes.project_images.data;
  const infoText = sectionData.attributes.info_text;
  const imageTitle = sectionData.attributes.image_title;
  const shouldShowSpan = infoText !== null && infoText !== "";
  return (
    layoutImages.length > 0 && (
      <div className="layout_long_right">
        {shouldShowSpan || window.innerWidth > 768 ? (
          <span className="info-text">{infoText}</span>
        ) : null}
        {layoutImages.map((image) => (
          <img
            className="image_long_right"
            key={image.id}
            src={image.attributes.url}
            alt={imageTitle}
          />
        ))}
      </div>
    )
  );
}

export default LayoutLongRight;
