import React from "react";

function LayoutLongLeft({ sectionData }) {
  const layoutImages = sectionData.attributes.project_images.data;
  const infoText = sectionData.attributes.info_text;
  const imageTitle = sectionData.attributes.image_title;

  return (
    layoutImages.length > 0 && (
      <div className="layout_long_left">
        {layoutImages.map((image) => (
          <img
            className="image_long_left"
            key={image.id}
            src={`http://localhost:1337${image.attributes.url}`}
            alt={imageTitle}
          />
        ))}
        <span>{infoText ? infoText : ""}</span>
      </div>
    )
  );
}

export default LayoutLongLeft;
