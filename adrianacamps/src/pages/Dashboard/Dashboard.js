import React, { useEffect, useState } from "react";
import { API, Auth, Hub } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Table from "../../Components/Table/Table";
import Modal from "../../Components/Modal";
import {
  listProjects,
  listHomes,
  listStudios,
  listNews,
  listContacts,
  listConcepts,
} from "../../graphql/queries";
import "../../configureAmplify";
import "./style/dashboard.scss";
import {
  deleteProjects as deleteProjectMutation,
  deleteContact as deleteContactMutation,
  deleteStudios as deleteStudioMutation,
  deleteNews as deleteNewMutation,
  deleteConcept as deleteConceptMutation,
  deleteHome as deleteHomeMututation,
} from "../../graphql/mutations";
import DashboardNav from "../../Components/DashboardNav/DashboardNav";
import { showToast } from "../../Components/Toast/Toast.js";
function Dashboard() {
  const [data, setData] = useState({
    projects: [],
    homes: [],
    news: [],
    studios: [],
    contacts: [],
    concepts: [],
  });
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
    fetchHomes();
    fetchProjects();
    fetchStudios();
    fetchNews();
    fetchContacts();
    fetchConcepts();
  }, []);

  //** */ Data Logic **//
  async function fetchHomes() {
    const homesData = await API.graphql({
      query: listHomes,
    });
    setData((prevData) => ({
      ...prevData,
      homes: homesData.data.listHomes.items,
    }));
  }

  async function fetchProjects() {
    const projectData = await API.graphql({
      query: listProjects,
    });
    setData((prevData) => ({
      ...prevData,
      projects: projectData.data.listProjects.items,
    }));
  }

  async function fetchStudios() {
    const projectData = await API.graphql({
      query: listStudios,
    });
    setData((prevData) => ({
      ...prevData,
      studios: projectData.data.listStudios.items,
    }));
  }

  async function fetchNews() {
    const projectData = await API.graphql({
      query: listNews,
    });
    setData((prevData) => ({
      ...prevData,
      news: projectData.data.listNews.items,
    }));
  }

  async function fetchContacts() {
    const projectData = await API.graphql({
      query: listContacts,
    });
    setData((prevData) => ({
      ...prevData,
      contacts: projectData.data.listContacts.items,
    }));
  }

  async function fetchConcepts() {
    const projectData = await API.graphql({
      query: listConcepts,
    });
    setData((prevData) => ({
      ...prevData,
      concepts: projectData.data.listConcepts.items,
    }));
  }

  async function deleteProcess(id) {
    if (selected === "home") {
      console.log("home delete - ", id);
      await API.graphql({
        query: deleteHomeMututation,
        variables: { input: { id } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      fetchHomes();
      showToast("Carrousel Image deleted successfully", "info");
    } else if (selected === "studio") {
      console.log("studio delete - ", id);
      await API.graphql({
        query: deleteStudioMutation,
        variables: { input: { id } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      fetchStudios();
      showToast("Project deleted successfully", "info");
    } else if (selected === "concepts") {
      console.log("concepts delete - ", id);
      await API.graphql({
        query: deleteConceptMutation,
        variables: { input: { id } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      fetchConcepts();
      showToast("Concept deleted successfully", "info");
    } else if (selected === "news") {
      console.log("news delete - ", id);
      await API.graphql({
        query: deleteNewMutation,
        variables: { input: { id } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      fetchNews();
      showToast("News deleted successfully", "info");
    } else if (selected === "contact") {
      console.log("contact delete - ", id);
      await API.graphql({
        query: deleteContactMutation,
        variables: { input: { id } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      fetchContacts();
      showToast("Contact deleted successfully", "info");
    } else if (selected === "projects") {
      console.log("projects delete - ", id);
      await API.graphql({
        query: deleteProjectMutation,
        variables: { input: { id } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      fetchProjects();
      showToast("Project deleted successfully", "info");
    }
  }

  //** Auth Logic **//
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }

  async function authListener() {
    Hub.listen("auth", ({ payload: { event } }) => {
      setSignedUser(event === "signIn");
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
    fetchHomes();
    fetchStudios();
    fetchNews();
    fetchContacts();
    fetchConcepts();
  };

  return (
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
              deleteProcess={deleteProcess}
              data={data}
              showModal={toggleModal}
              selected={selected}
              // projectId={data.projects.map((project) => project.id)}
            />
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
      </div>
    </>
  );
}

export default withAuthenticator(Dashboard);
