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

async function fetchData(setData) {
  const [
    homesData,
    projectData,
    studiosData,
    newsData,
    contactsData,
    conceptsData,
  ] = await Promise.all([
    API.graphql({ query: listHomes }),
    API.graphql({ query: listProjects }),
    API.graphql({ query: listStudios }),
    API.graphql({ query: listNews }),
    API.graphql({ query: listContacts }),
    API.graphql({ query: listConcepts }),
  ]);

  setData({
    homes: homesData.data.listHomes.items,
    projects: projectData.data.listProjects.items,
    studios: studiosData.data.listStudios.items,
    news: newsData.data.listNews.items,
    contacts: contactsData.data.listContacts.items,
    concepts: conceptsData.data.listConcepts.items,
  });
}

async function deleteProcess(selected, id) {
  let mutation;
  let refetch;

  switch (selected) {
    case "home":
      mutation = deleteHomeMututation;
      refetch = listHomes;
      break;
    case "studio":
      mutation = deleteStudioMutation;
      refetch = listStudios;
      break;
    case "concepts":
      mutation = deleteConceptMutation;
      refetch = listConcepts;
      break;
    case "news":
      mutation = deleteNewMutation;
      refetch = listNews;
      break;
    case "contact":
      mutation = deleteContactMutation;
      refetch = listContacts;
      break;
    case "projects":
      mutation = deleteProjectMutation;
      refetch = listProjects;
      break;
  }

  await API.graphql({
    query: mutation,
    variables: { input: { id } },
    authMode: "AMAZON_COGNITO_USER_POOLS",
  });

  const data = await API.graphql({ query: refetch });
  return data.data[Object.keys(data.data)[0]].items;
}

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
  useEffect(() => {
    authListener();
    checkUser();
    fetchData(setData);
  }, []);

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

  const toggleModal = async (isEditing = false, project) => {
    setIsEditing(isEditing);
    setModal(!modal);
    setProjectData(project || null);

    const newData = await deleteProcess(selected, project?.id);
    setData((prevData) => ({
      ...prevData,
      [selected]: newData,
    }));
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

            <Table data={data} showModal={toggleModal} selected={selected} />
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
