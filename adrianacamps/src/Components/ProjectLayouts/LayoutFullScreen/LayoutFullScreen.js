import React from "react";

function LayoutFullScreen({ sectionData }) {
  const layoutImages = sectionData.attributes.project_images.data;
  const infoText = sectionData.attributes.info_text;
  const imageTitle = sectionData.attributes.image_title;

  return (
    layoutImages.length > 0 && (
      <div className="layout_fullscreen">
        {layoutImages.map((image) => (
          <img
            className="project-image-large"
            key={image.id}
            src={image.attributes.url}
            alt={imageTitle}
          />
        ))}
        {infoText && <p>{infoText}</p>}
      </div>
    )
  );
}

export default LayoutFullScreen;
