import React from "react";

function Layout2Pics({ sectionData }) {
  const layoutImages = sectionData.attributes.project_images.data;
  const imageTitle = sectionData.attributes.image_title;

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
    </div>
  );
}

export default Layout2Pics;
