import React from "react";
import "./style/conceptsContent.scss";

function ConceptsContent() {
  return (
    <>
      <div className="concept-content-box">
        <div className="concept-image"></div>
        <span>
          NOM DEL PROJECTE
          {/* <Link to={`/project/${project.id}`} state={{ project }}>
        {project.name}
      </Link> */}
        </span>
        <span>Nom del projecte</span>
      </div>
    </>
  );
}

export default ConceptsContent;
