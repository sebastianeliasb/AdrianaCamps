import React from "react";

function Layout3Row({ sectionData }) {
  const layoutImages = sectionData.attributes.project_images.data;
  const infoText = sectionData.attributes.info_text;
  const imageTitle = sectionData.attributes.image_title;

  return (
    layoutImages.length > 0 && (
      <div className="layout_3_row">
        {layoutImages.map((image) => (
          <img
            className="images_3_row"
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

export default Layout3Row;
