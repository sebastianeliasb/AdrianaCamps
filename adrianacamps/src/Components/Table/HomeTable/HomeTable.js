import React from "react";
import edit from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";

function HomeTable({ showModal, homes, deleteHome }) {
  return (
    <div className="content-information">
      <div className="content-row-header">
        <div style={{ maxWidth: "70%" }}>Name</div>
        <div></div>
        <div>Delete</div>
      </div>
      {homes.map((eachHome) => (
        <div key={eachHome.id} className="content-row">
          <div
            style={{ maxWidth: "70%" }}
            onClick={() => console.log(eachHome.id)}
          >
            {eachHome.name}
          </div>
          <div>
            {/* <span
              onClick={() => showModal(true, eachHome)}
              style={{ backgroundImage: `url(${edit})` }}
            /> */}
            <span
              onClick={() => deleteHome(eachHome.id)}
              style={{ backgroundImage: `url(${deleteIcon})` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeTable;
