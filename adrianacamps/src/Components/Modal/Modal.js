import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import "./style/modal.scss";
import "easymde/dist/easymde.min.css";
import { API, Storage } from "aws-amplify";
import {
  createConcept,
  createContact,
  createHome,
  createNews,
  createProjects,
  createStudio,
} from "../../graphql/mutations";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { SimpleMdeReact } from "react-simplemde-editor";
import option1 from "../../assets/Untitled-1.png";
import Input from "../Input";
import UploadImagebtn from "../UploadImageBtn/UploadImagebtn";
import Textarea from "../Textarea/Textarea";

const initialState = {
  name: "",
  subName: "",
  location: "",
  date: "",
  description: "",
  subDescription: "",
  client: "",
  photographer: "",
  surface: "",
  projectImages: "",
  option: "1",
};

function Modal({
  show,
  toggleModal,
  projects,
  projectData,
  isEditing,
  selected,
  ...props
}) {
  const [selectedTag, setSelectedTag] = useState("mainInfo");
  const [project, setProject] = useState(initialState);
  const [home, setHome] = useState({
    carrouselImages: [],
  });
  const [studio, setStudio] = useState({
    aboutImage: [],
    aboutMe: "",
    philosophy: "",
    route: "",
    username: "",
  });
  const [concept, setConcept] = useState({
    conceptsImageMain: "",
    conceptImages: [],
    conceptTitle: "",
    conceptText: "",
  });
  const [contact, setContact] = useState({
    contactImage: "",
    contactText: "",
  });
  const [news, setNews] = useState({
    newsYear: "",
    newsTitle: "",
    newsDate: "",
    newsSource: "",
    newsLink: "",
  });
  const [images, setImages] = useState(null);
  const [imageMain, setImageMain] = useState(null);
  const imageFileInput = useRef(null);
  const {
    name,
    subName,
    location,
    date,
    description,
    subDescription,
    client,
    photographer,
    surface,
    projectImages,
    option,
  } = project;

  function onChange(e, table) {
    if (table === "createProject") {
      setProject(() => ({
        ...project,
        [e.target.name]: e.target.value,
      }));
    } else if (table === "createStudio") {
      setStudio(() => ({
        ...studio,
        [e.target.name]: e.target.value,
      }));
    } else if (table === "createConcept") {
      setConcept(() => ({
        ...concept,
        [e.target.name]: e.target.value,
      }));
    } else if (table === "createContact") {
      setContact(() => ({
        ...contact,
        [e.target.name]: e.target.value,
      }));
    } else if (table === "createNews") {
      setNews(() => ({
        ...news,
        [e.target.name]: e.target.value,
      }));
    }
  }

  async function createNewProject() {
    if (!name) return;
    project.id = uuid();
    if (images.length !== 0) {
      project.projectImages = Array.from(images)
        .map((img) => img.name)
        .join(",");
      Array.from(images).map(async (image) => {
        await Storage.put(image.name, image);
      });
    }
    await API.graphql({
      query: createProjects,
      variables: { input: project },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toggleModal();
    setProject(initialState);
    setImages(null);
  }

  async function createNewHome() {
    if (images.length !== 0) {
      home.carrouselImages = Array.from(images).map((img) => img.name);
      Array.from(images).map(async (image) => {
        await Storage.put(image.name, image);
      });
    }
    await API.graphql({
      query: createHome,
      variables: { input: home },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toggleModal();
    setHome({ carrouselImages: [] });
    setImages(null);
  }

  async function createNewStudio() {
    if (images.length !== 0) {
      studio.aboutImage = Array.from(images).map((img) => img.name);
      Array.from(images).map(async (image) => {
        await Storage.put(image.name, image);
      });
    }
    await API.graphql({
      query: createStudio,
      variables: { input: studio },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toggleModal();
    setStudio({
      aboutImage: [],
      aboutMe: "",
      philosophy: "",
      route: "",
      username: "",
    });
    setImages(null);
  }

  async function createNewConcept() {
    if (images.length !== 0) {
      concept.conceptImages = Array.from(images).map((img) => img.name);
      concept.conceptsImageMain = imageMain.name;
      await Storage.put(imageMain.name, imageMain);
      Array.from(images).map(async (image) => {
        await Storage.put(image.name, image);
      });
    }
    await API.graphql({
      query: createConcept,
      variables: { input: concept },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toggleModal();
    setConcept({
      conceptsImageMain: "",
      conceptImages: [],
      conceptTitle: "",
      conceptText: "",
    });
    setImages(null);
  }

  async function createNewContact() {
    if (images.length !== 0) {
      contact.contactImage = images[0].name;
      await Storage.put(images[0].name, images[0]);
    }
    await API.graphql({
      query: createContact,
      variables: { input: contact },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toggleModal();
    setContact({
      contactImage: "",
      contactText: "",
    });
    setImages(null);
  }

  async function createNewNews() {
    await API.graphql({
      query: createNews,
      variables: { input: news },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toggleModal();
    setConcept({
      conceptsImageMain: "",
      conceptImages: [],
      conceptTitle: "",
      conceptText: "",
    });
    setImages(null);
  }

  async function uploadImage() {
    imageFileInput.current.click();
  }

  function handleChange(e, imgType) {
    const fileUploaded = e.target.files;
    if (!fileUploaded) return;
    imgType === "images"
      ? setImages(fileUploaded)
      : setImageMain(fileUploaded[0]);
  }

  function handleModalTag(tag) {
    setSelectedTag(tag);
  }

  // const id = projectData.id;
  return (
    <>
      {show ? (
        <>
          <div onClick={() => toggleModal()} className="modal-backdrop">
            {" "}
          </div>
          {isEditing ? (
            <div className="modal-body">
              <div
                onClick={() => console.log(projectData.id)}
                className="modal-title"
              >
                <span>{props.modalTitle} edit</span>
              </div>
              {/* <div className="modal-nav">{props.navTabs}</div> */}
              <div className="modal-info-container">
                <Input
                  // label="name"
                  // className="name-input"
                  onChange={onChange}
                  name="name"
                  value={projectData.name}
                  placeholder="name"
                />
              </div>
              <button>Confirm</button>
            </div>
          ) : (
            <div className="modal-body">
              <div className="modal-title">
                {props.modalTitle.endsWith("s") &&
                props.modalTitle !== "news" ? (
                  <span>New {props.modalTitle.slice(0, -1)}</span>
                ) : (
                  <span>New {props.modalTitle}</span>
                )}
              </div>
              {/* <div className="modal-nav">{props.navTabs}</div> */}
              {selected === "projects" ? (
                <>
                  <div className="create-tags">
                    <span
                      className={
                        selectedTag === "mainInfo" ? "selectedTag" : null
                      }
                      onClick={() => handleModalTag("mainInfo")}
                    >
                      Main Info
                    </span>
                    <span
                      className={
                        selectedTag === "description" ? "selectedTag" : null
                      }
                      onClick={() => handleModalTag("description")}
                    >
                      Descriptions
                    </span>
                    <span
                      className={
                        selectedTag === "images" ? "selectedTag" : null
                      }
                      onClick={() => handleModalTag("images")}
                    >
                      Images
                    </span>
                  </div>
                  <div className="modal-info-container">
                    {selectedTag === "mainInfo" ? (
                      <div className="modal-mainInfo-subcontainer">
                        <Input
                          className="name-input"
                          onChange={(e) => onChange(e, "createProject")}
                          name="name"
                          value={project.name}
                          placeholder="Project Title"
                          label="Project Title"
                        />

                        <Input
                          className="client-input"
                          onChange={(e) => onChange(e, "createProject")}
                          name="client"
                          value={project.client}
                          placeholder="Client"
                          label="Client"
                        />
                        <Input
                          className="location-input"
                          onChange={(e) => onChange(e, "createProject")}
                          name="location"
                          value={project.location}
                          placeholder="Location"
                          label="Location"
                        />
                        <Input
                          className="subName-input"
                          onChange={(e) => onChange(e, "createProject")}
                          name="subName"
                          value={project.subName}
                          placeholder="Sub-name"
                          label="Sub-name"
                        />
                        <Input
                          className="photographer-input"
                          onChange={(e) => onChange(e, "createProject")}
                          name="photographer"
                          value={project.photographer}
                          placeholder="Photographer"
                          label="Photographer"
                        />
                        <Input
                          className="surface-input"
                          onChange={(e) => onChange(e, "createProject")}
                          name="surface"
                          value={project.surface}
                          placeholder="Surface"
                          label="Surface"
                        />
                      </div>
                    ) : selectedTag === "description" ? (
                      <div className="modal-desciption-subcontainer">
                        <Textarea
                          onChange={(e) => onChange(e, "createProject")}
                          placeholder="Description"
                          value={project.description}
                          name="description"
                        />
                        {/* <textarea
                          type="text"
                          className="desc-input"
                          onChange={(e) => onChange(e, "createProject")}
                          name="description"
                          value={project.description}
                          placeholder="description"
                        /> */}
                        <Textarea
                          onChange={(e) => onChange(e, "createProject")}
                          placeholder="Sub-description"
                          value={project.subDescription}
                          name="subDescription"
                        />
                        {/* <textarea
                          className="subDesc-input"
                          onChange={(e) => onChange(e, "createProject")}
                          name="subDescription"
                          value={project.subDescription}
                          placeholder="subDescription"
                        /> */}
                      </div>
                    ) : selectedTag === "images" ? (
                      <div className="modal-images-subcontainer">
                        <div>
                          {" "}
                          <select
                            value={project.option}
                            name="option"
                            onChange={(e) => onChange(e, "createProject")}
                          >
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </select>
                        </div>
                        <div>
                          {" "}
                          <div>
                            <input
                              // className="images-input"
                              type="file"
                              ref={imageFileInput}
                              onChange={(e) => handleChange(e, "images")}
                              multiple
                              // name="projectImages"
                              // value={project.projectImages}
                              // placeholder="projectImages"
                            />
                            <div>
                              {project.option === "1" && (
                                <img src={option1} alt="option1"></img>
                              )}
                            </div>
                          </div>
                          <div>
                            {" "}
                            <div>
                              <UploadImagebtn
                                id={"home-upload"}
                                onClick={uploadImage}
                                btnText={"Upload Images"}
                              />
                            </div>
                            <div>
                              {images &&
                                images.length !== 0 &&
                                Array.from(images).map((image) => (
                                  <img
                                    key={image.name}
                                    alt="To upload"
                                    src={URL.createObjectURL(image)}
                                  />
                                ))}
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <button
                      onClick={createNewProject}
                    >{`Create project`}</button>
                  </div>
                </>
              ) : selected === "studio" ? (
                <div className="modal-info-container">
                  <Textarea
                    className="name-input"
                    onChange={(e) => onChange(e, "createStudio")}
                    name="aboutMe"
                    // value={studio.name}
                    placeholder="About"
                  />
                  <input
                    className="images-input"
                    type="file"
                    ref={imageFileInput}
                    onChange={(e) => handleChange(e, "images")}
                    multiple
                    // name="projectImages"
                    // value={project.projectImages}
                    placeholder="projectImages"
                  />
                  {images &&
                    images.length !== 0 &&
                    Array.from(images).map((image) => (
                      <img
                        key={image.name}
                        alt="To upload"
                        src={URL.createObjectURL(image)}
                      />
                    ))}
                  <button
                    onClick={createNewStudio}
                  >{`Create ${props.modalTitle}`}</button>
                  <UploadImagebtn
                    onClick={uploadImage}
                    btnText={"Upload Image"}
                  />
                </div>
              ) : selected === "home" ? (
                <div className="modal-info-container">
                  <Input
                    className="name-input"
                    onChange={(e) => onChange(e, "createHome")}
                    name="name"
                    // value={project.name}
                    placeholder="Image title"
                    label="Name"
                  />
                  <input
                    className="images-input"
                    type="file"
                    id="file"
                    ref={imageFileInput}
                    onChange={(e) => handleChange(e, "images")}
                    multiple
                    // name="projectImages"
                    // value={project.projectImages}
                    placeholder="Image"
                  />
                  {images &&
                    images.length !== 0 &&
                    Array.from(images).map((image) => (
                      <img
                        key={image.name}
                        alt="To upload"
                        src={URL.createObjectURL(image)}
                      />
                    ))}
                  <button
                    onClick={createNewHome}
                  >{`Create ${props.modalTitle}`}</button>
                  <UploadImagebtn
                    onClick={uploadImage}
                    btnText={"Upload Images"}
                  />
                </div>
              ) : selected === "concepts" ? (
                <div className="modal-info-container">
                  <input
                    // className="name-input"
                    onChange={(e) => onChange(e, "createConcept")}
                    name="conceptText"
                    // value={project.name}
                    placeholder="Concept Text"
                  />
                  <input
                    // className="text-input"
                    onChange={(e) => onChange(e, "createConcept")}
                    name="conceptTitle"
                    // value={project.name}
                    placeholder="Concept Title"
                  />
                  <input
                    className="images-input"
                    type="file"
                    id="file"
                    ref={imageFileInput}
                    onChange={(e) => handleChange(e, "images")}
                    multiple
                    // name="projectImages"
                    // value={project.projectImages}
                    placeholder="Image"
                  />
                  <input
                    className="images-input"
                    type="file"
                    id="file"
                    ref={imageFileInput}
                    onChange={(e) => handleChange(e, "mainImage")}
                    // name="projectImages"
                    // value={project.projectImages}
                    placeholder="Image Main"
                  />
                  {images &&
                    images.length !== 0 &&
                    Array.from(images).map((image) => (
                      <img
                        key={image.name}
                        alt="To upload"
                        src={URL.createObjectURL(image)}
                      />
                    ))}
                  {imageMain && (
                    <img
                      key={imageMain.name}
                      alt="To upload"
                      src={URL.createObjectURL(imageMain)}
                    />
                  )}
                  <button
                    onClick={createNewConcept}
                  >{`Create ${props.modalTitle}`}</button>
                  <UploadImagebtn
                    onClick={uploadImage}
                    btnText={"Upload Images"}
                  />
                </div>
              ) : selected === "contact" ? (
                <div className="modal-info-container">
                  <Textarea
                    // className="name-input"
                    onChange={(e) => onChange(e, "createContact")}
                    name="contactText"
                    // value={project.name}
                    placeholder="Contact Text"
                  />
                  <input
                    className="images-input"
                    type="file"
                    id="file"
                    ref={imageFileInput}
                    onChange={(e) => handleChange(e, "images")}
                    // name="projectImages"
                    // value={project.projectImages}
                    placeholder="Image"
                  />
                  {images &&
                    images.length !== 0 &&
                    Array.from(images).map((image) => (
                      <img
                        key={image.name}
                        alt="To upload"
                        src={URL.createObjectURL(image)}
                      />
                    ))}
                  <button
                    onClick={createNewContact}
                  >{`Create ${props.modalTitle}`}</button>
                  <UploadImagebtn
                    onClick={uploadImage}
                    btnText={"Upload Image"}
                  />
                </div>
              ) : selected === "news" ? (
                <div className="modal-info-container">
                  <Input
                    // className="name-input"
                    onChange={(e) => onChange(e, "createNews")}
                    name="newsYear"
                    // value={project.name}
                    placeholder="Year"
                    label="Year"
                  />
                  <Input
                    // className="name-input"
                    onChange={(e) => onChange(e, "createNews")}
                    name="newsTitle"
                    // value={project.name}
                    placeholder="Title"
                    label="Title"
                  />
                  <Input
                    // className="name-input"
                    onChange={(e) => onChange(e, "createNews")}
                    name="newsDate"
                    // value={project.name}
                    placeholder="Date"
                    label="Date"
                  />
                  <Input
                    // className="name-input"
                    onChange={(e) => onChange(e, "createNews")}
                    name="newsSource"
                    // value={project.name}
                    placeholder="Source"
                    label="Source"
                    size="large"
                  />
                  <Input
                    // className="name-input"
                    onChange={(e) => onChange(e, "createNews")}
                    name="newsLink"
                    // value={project.name}
                    placeholder="Link"
                    label="Link"
                  />
                  <button
                    onClick={createNewNews}
                  >{`Create ${props.modalTitle}`}</button>
                  <UploadImagebtn
                    onClick={uploadImage}
                    btnText={"Upload Image"}
                  />
                </div>
              ) : null}
            </div>
          )}
        </>
      ) : null}
    </>
  );
}

export default withAuthenticator(Modal);
