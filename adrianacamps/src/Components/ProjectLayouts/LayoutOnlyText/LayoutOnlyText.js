import React from "react";

function LayoutOnlyText({ sectionData }) {
  const infoText = sectionData.attributes.info_text;
  return (
    <div className="layout_onlyText">{infoText && <span>{infoText}</span>}</div>
  );
}

export default LayoutOnlyText;
