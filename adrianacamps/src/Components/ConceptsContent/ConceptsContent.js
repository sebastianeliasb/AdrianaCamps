import React from "react";
import "./style/conceptsContent.scss";
import { Link } from "react-router-dom";

function ConceptsContent({ data, loading, error }) {
  if (!data) {
    return null;
  }
  return data.data.map((concept) => (
    <div key={concept.id} className="concept-content-box">
      <div className="concept-image-link">
        <Link to={`/concept/${concept.id}`} state={{ concept }}>
          <img
            className="concept-image"
            src={concept.attributes.main_image.data.attributes.url}
            alt={concept.attributes.name}
          />
        </Link>
      </div>
      <div className="concept-info-link">
        <Link to={`/concept/${concept.id}`} state={{ concept }}>
          {concept.attributes.concept_title}
        </Link>
      </div>
      <span className="project-title2">{concept.attributes.subtitle}</span>
    </div>
  ));
}
export default ConceptsContent;
