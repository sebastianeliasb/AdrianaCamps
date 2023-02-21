import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import Table from "../../Components/Table/Table";
import Modal from "../../Components/Modal";
import { listProjects } from "../../graphql/queries";
import "../../configureAmplify";
import "./style/dashboard.scss";

function Dashboard() {
  const [data, setData] = useState({ projects: [], news: [] });
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("home");
  const [lables, setLables] = useState(["Name", "Sub-name", "Client"]);
  const [signedUser, setSignedUser] = useState(false);
  const [user, setUser] = useState(null);
  const [isEditing, setisEditing] = useState(false);

  //** */ UseEffects **//
  useEffect(() => {
    authListener();
    checkUser();
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      const projectData = await API.graphql({
        query: listProjects,
      });
      setData((prevData) => ({
        ...prevData,
        projects: projectData.data.listProjects.items,
      }));
    }
    fetchProjects();
  }, []);

  //** */ Auth Logic **//
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }

  async function authListener() {
    Hub.listen("auth", ({ payload: { event } }) => {
      setSignedUser(event === "signIn" ? true : false);
    });

    try {
      await Auth.currentAuthenticatedUser();
      setSignedUser(true);
    } catch (error) {
      console.log(error);
      setSignedUser(false);
    }
  }

  const signOut = async (e) => {
    e.preventDefault();
    await Auth.signOut();
    window.location.reload(false);
  };

  //** */ Label Logic **//
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

  const fetchLabels = useCallback(
    (labelsToKeep) => {
      const labelSet = new Set();

      data.projects.forEach((project) => {
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
    [data.projects]
  );

  const handleSelect = (name) => {
    setSelected(name);
    fetchLabels(labelMap[name]);
  };

  const toggleModal = (isEdit) => {
    if (isEdit === "edit") {
      setisEditing(true);
      setModal(!modal);
    } else {
      setisEditing(false);
      setModal(!modal);
    }
  };

  return (
    user && (
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
              {signedUser && (
                <>
                  <div className="username_signout">
                    <p>{`Welcome back ${user.username}`}</p>{" "}
                    <button onClick={signOut}>Sign Out</button>
                  </div>
                </>
              )}

              <Table
                projects={data.projects}
                showModal={toggleModal}
                selected={selected}
              />
            </div>
          </div>
        </div>
        <Modal
          isEditing={isEditing}
          show={modal}
          toggleModal={toggleModal}
          modalTitle={selected}
          projects={data.projects}
          navTabs={lables.map((label, index) => (
            <div key={index}>{label}</div>
          ))}
        />
      </>
    )
  );
}

export default withAuthenticator(Dashboard);
