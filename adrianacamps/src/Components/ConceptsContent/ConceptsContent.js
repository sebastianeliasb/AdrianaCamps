import React from "react";
import "./style/conceptsContent.scss";
import { Link } from "react-router-dom";

function ConceptsContent({ data, loading, error }) {
  if (!data) {
    return null;
  }
  // return data.data.map((concept) => (
  //   <>
  //     <div key={concept.id} className="concept-content-box">
  //       <div className="concept-image-link">
  //         <Link to={`/concept/${concept.id}`} state={{ concept }}>
  //           <img
  //             className="concept-image"
  //             src={`${`http://localhost:1337${concept.attributes.main_image.data[0].attributes.url}`} `}
  //             alt={concept.attributes.name}
  //           />
  //           {console.log(concept.attributes.main_image.data[0].attributes.url)}
  //         </Link>
  //       </div>
  //       <div className="concept-info-link">
  //         <Link to={`/concept/${concept.id}`} state={{ concept }}>
  //           {concept.attributes.concept_title}
  //         </Link>
  //       </div>
  //       <p className="project-title2" style={{ margin: "8px" }}>
  //         {concept.attributes.concept_title}
  //       </p>
  //     </div>
  //   </>
  // ));
}
export default ConceptsContent;
