import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import Table from "../../Components/Table/Table";
import Modal from "../../Components/Modal";
import { listProjects } from "../../graphql/queries";
import "../../configureAmplify";
import "./style/dashboard.scss";
import { deleteProjects as deleteProjectMutation } from "../../graphql/mutations";
import { updateProjects as editProject } from "../../graphql/mutations";
import DashboardNav from "../../Components/DashboardNav/DashboardNav";

function Dashboard() {
  const [data, setData] = useState({ projects: [], news: [] });
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("home");
  const [signedUser, setSignedUser] = useState(false);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  //**  UseEffects **//
  useEffect(() => {
    authListener();
    checkUser();
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  //** */ Data Logic **//
  async function fetchProjects() {
    const projectData = await API.graphql({
      query: listProjects,
    });
    setData((prevData) => ({
      ...prevData,
      projects: projectData.data.listProjects.items,
    }));
  }

  async function deleteProject(id) {
    await API.graphql({
      query: deleteProjectMutation,
      variables: { input: { id } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    fetchProjects();
  }

  //** Auth Logic **//
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

  const handleSelect = (name) => {
    setSelected(name);
  };
  const [projectData, setProjectData] = useState(null);

  const toggleModal = (isEditing = false, project) => {
    setIsEditing(isEditing);
    setModal(!modal);
    setProjectData(project || null);
    fetchProjects();
  };

  return (
    user && (
      <>
        <div id="dashboard-body">
          <DashboardNav selected={selected} handleSelect={handleSelect} />
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
                deleteProject={deleteProject}
                data={data}
                showModal={toggleModal}
                selected={selected}
                // projectId={data.projects.map((project) => project.id)}
              />
            </div>
          </div>
        </div>
        <Modal
          selected={selected}
          isEditing={isEditing}
          show={modal}
          toggleModal={toggleModal}
          modalTitle={selected}
          projects={data.projects}
          projectData={projectData}
        />
      </>
    )
  );
}

export default withAuthenticator(Dashboard);
