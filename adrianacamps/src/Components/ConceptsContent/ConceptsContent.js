import React from "react";
import "./style/conceptsContent.scss";
import { Link } from "react-router-dom";

function ConceptsContent({ data }) {
  if (!data) {
    return null;
  }
  return data.map((concept, index) => (
    <>
      <div className="concept-content-box">
        <div className="concept-image-link">
          <Link to={`/concept/${concept.id}`} state={{ concept }}>
            <img
              className="concept-image"
              src={concept.conceptImages[0]}
              alt={concept.conceptTitle}
            />
          </Link>
        </div>
        <div className="concept-info-link">
          <Link to={`/concept/${concept.id}`} state={{ concept }}>
            {concept.conceptTitle}
          </Link>
          <p className="project-title2" style={{ margin: "8px" }}>
            {concept.conceptText}
          </p>
        </div>
      </div>
    </>
  ));
}

export default ConceptsContent;

// function ConceptsContent({ data }) {
//   return (
//     <>
//       <div className="concept-content-box">
//         <div className="concept-image"></div>
//         {data.map((concept, index) => {
//           <p>{concept.name}</p>;
//         })}
//         <span>
//           NOM DEL PROJECTE
//           {/* <Link to={`/project/${project.id}`} state={{ project }}>
//       {project.name}
//     </Link> */}
//         </span>
//         <span>Nom del projecte</span>
//       </div>
//     </>
//   );
// }

// export default ConceptsContent;
