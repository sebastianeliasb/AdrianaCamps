import React from "react";
import "./style/conceptsContent.scss";
import { Link } from "react-router-dom";
// function ConceptsContent({ data }) {
//   if (!data) {
//     return null;
//   }
//   return data.map((concept, index) => (
//     <>
//       <div className="concept-content-box">
//         <div className="concept-image-link">
//           <Link to={`/concept/${concept.id}`} state={{ concept }}>
//             <img
//               className="concept-image"
//               src={concept.conceptImages[0]}
//               alt={concept.name}
//             />
//           </Link>
//         </div>
//         <span>
//           <Link to={`/concept/${concept.id}`} state={{ concept }}>
//             {concept.name}
//           </Link>
//         </span>
//         <div className="project-title2">{concept.name}</div>
//       </div>
//     </>
//   ));
// }

// export default ConceptsContent;

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
