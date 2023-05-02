import React from "react";
import edit from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";

function NewsTable({ showModal, news, deleteNews }) {
  return (
    <div className="content-information">
      <div className="content-row-header">
        <div>Title</div>
        <div>Year</div>
        <div>Link</div>
        <div>Edit</div>
      </div>
      {news.map((project) => (
        <div key={project.id} className="content-row">
          <div onClick={() => console.log(project.id)}>{project.newsTitle}</div>
          <div>{project.newsYear}</div>
          <div>{project.newsLink}</div>
          <div>
            <span
              onClick={() => showModal(true, project)}
              style={{ backgroundImage: `url(${edit})` }}
            ></span>
            <span
              onClick={() => deleteNews(project.id)}
              style={{ backgroundImage: `url(${deleteIcon})` }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsTable;
