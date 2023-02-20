import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import "./style/dashboard.scss";
import { Link } from "react-router-dom";
import Table from "../../Components/Table/Table";
import "../../configureAmplify";

import { API } from "aws-amplify";
import { listProjects } from "../../graphql/queries";
import Modal from "../../Components/Modal";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [news, setNews] = useState([]);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("home");
  const [lables, setLables] = useState(["Name", "Sub-name", "Client"]);
  const [signedUser, setSignedUser] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    authListener();
    checkUser();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return setSignedUser(true);
        case "signOut":
          return setSignedUser(false);
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setSignedUser(true);
    } catch (error) {
      console.log(error);
    }
  }

  const labelMap = {
    home: ["carrouselImages"],
    studio: ["studio"],
    projects: [
      "name",
      "subName",
      " location",
      "date",
      "description",
      "subDescription",
      "client",
      "photographer",
      "surface",
      "projectImages",
    ],
    news: ["something"],
    contact: ["something"],
    concepts: ["something"],
  };

  const handleSelect = (name) => {
    setSelected(name);
    fetchLabels(labelMap[name]);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const signOut = (e) => {
    e.preventDefault();
    Auth.signOut().then(() => {
      window.location.reload(false);
    });
  };

  async function fetchProjects() {
    const projectData = await API.graphql({
      query: listProjects,
    });
    setProjects([...projectData.data.listProjects.items] || []);
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const fetchLabels = useCallback(
    (labelsToKeep) => {
      const labelSet = new Set();

      projects.forEach((project) => {
        const keys = Object.keys(project);
        keys.forEach((key) => {
          if (labelsToKeep.includes(key)) {
            labelSet.add(key);
          }
        });
      });

      const labels = Array.from(labelSet);
      setLables(labels);
    },
    [projects]
  );
  if (!user) return null;
  return (
    <>
      <div id="dashboard-body">
        <div className="nav-body">
          <Link to="/">
            <header>Adriana</header>
          </Link>
          <div>
            <span
              className={selected === "home" ? "selected" : ""}
              onClick={() => handleSelect("home")}
            >
              Home
            </span>
          </div>
          <div>
            <span
              className={selected === "studio" ? "selected" : ""}
              onClick={() => handleSelect("studio")}
            >
              Studio
            </span>
          </div>
          <div>
            <span
              className={selected === "projects" ? "selected" : ""}
              onClick={() => {
                handleSelect("projects");
                // fetchLabels();
              }}
            >
              Projects
            </span>
          </div>
          <div>
            <span
              className={selected === "news" ? "selected" : ""}
              onClick={() => handleSelect("news")}
            >
              News
            </span>
          </div>
          <div>
            <span
              className={selected === "contact" ? "selected" : ""}
              onClick={() => handleSelect("contact")}
            >
              Contact
            </span>
          </div>
          <div>
            <span
              className={selected === "concepts" ? "selected" : ""}
              onClick={() => handleSelect("concepts")}
            >
              Concepts
            </span>
          </div>
          <header>Camps</header>
        </div>
        <div className="content-body">
          <div className="dashboard">
            {signedUser && <p>{`Welcome back ${user.username}`}</p>}
            <button onClick={signOut}>Sign Out</button>
            <Table
              projects={projects}
              showModal={toggleModal}
              selected={selected}
            />
          </div>
        </div>
      </div>
      <Modal
        show={modal}
        toggleModal={toggleModal}
        modalTitle={selected}
        projects={projects}
        navTabs={lables.map((label, index) => (
          <div key={index}>{label}</div>
        ))}
      />
    </>
  );
}

export default withAuthenticator(Dashboard);
