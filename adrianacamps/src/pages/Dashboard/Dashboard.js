import React from "react";
import "./style/dashboard.scss";
import { Link } from "react-router-dom";
import Table from "../../Components/Table/Table";
import "../../configureAmplify";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listProjects } from "../../graphql/queries";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const projectData = await API.graphql({
      query: listProjects,
    });
    setProjects(projectData.data.listProjects.items);
  }

  return (
    <div id="dashboard-body">
      <div className="nav-body">
        <Link to="/">
          <header>Adriana</header>
        </Link>
        <div>Home</div>
        <div>Studio</div>
        <div>Projects</div>
        <div>News</div>
        <div>Contact</div>
        <div>Concepts</div>
        <header>Camps</header>
      </div>
      <div className="content-body">
        <div className="dashboard">
          <Table projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
