import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import "./style/modal.scss";
import "easymde/dist/easymde.min.css";
import { API, Storage } from "aws-amplify";
import {
  createConcept,
  createContact,
  createHomes,
  createNews,
  createProjects,
  createStudios,
  updateContact,
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
  //option: "1",
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
    id: "",
    name: "",
    carrouselImages: [],
  });
  const [studio, setStudio] = useState({
    aboutImage: "",
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
    newsImage: [],
  });
  const [images, setImages] = useState(null);
  const [imageMain, setImageMain] = useState(null);
  const imageFileInput = useRef(null);
  const imageMainFileInput = useRef(null);

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

  useEffect(() => {
    async function fetchCurrentData() {
      if (selected === "projects") {
        setProject(projectData);
      } else if (selected === "studio") {
        setStudio(projectData);
      } else if (selected === "home") {
        setHome(projectData);
      } else if (selected === "concepts") {
        setConcept(projectData);
      } else if (selected === "contact") {
        let imageURL = await Storage.get(projectData.contactImage);
        setImages([imageURL]);
        setContact({ ...projectData, contactImage: imageURL });
      } else if (selected === "news") {
        setNews(projectData);
      }
    }
    if (projectData) {
      fetchCurrentData();
    }
  }, [projectData]);

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
    } else if (table === "createHome") {
      setHome(() => ({
        ...home,
        [e.target.name]: e.target.value,
      }));
    }
  }

  async function createNewProject() {
    if (!name) return;
    if (images.length === 0) {
      return;
    }

    project.id = uuid();

    project.projectImages = Array.from(images)
      .map((img) => img.name)
      .join(",");
    Array.from(images).map(async (image) => {
      await Storage.put(image.name, image);
    });

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
    if (images.length === 0) {
      return;
    }

    home.id = uuid();

    home.carrouselImages = Array.from(images).map((img) => img.name);
    Array.from(images).map(async (image) => {
      await Storage.put(image.name, image);
    });

    await API.graphql({
      query: createHomes,
      variables: { input: home },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toggleModal();
    setHome({ carrouselImages: [] });
    setImages(null);
  }

  async function createNewStudio() {
    if (images.length === 0) {
      return;
    }

    studio.id = uuid();

    studio.aboutImage = images[0].name;
    await Storage.put(images[0].name, images[0]);

    await API.graphql({
      query: createStudios,
      variables: { input: studio },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toggleModal();
    console.log(studio);
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
    if (images.length === 0) {
      return;
    }

    concept.conceptImages = Array.from(images).map((img) => img.name);
    concept.conceptsImageMain = imageMain.name;
    await Storage.put(imageMain.name, imageMain);
    Array.from(images).map(async (image) => {
      await Storage.put(image.name, image);
    });

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
    if (images.length === 0) {
      return;
    }

    if (typeof images[0].image === "string") {
      contact.contactImage = project.contactImage;
    } else {
      contact.contactImage = images[0].name;
      await Storage.put(images[0].name, images[0]);
    }

    await API.graphql({
      query: isEditing ? updateContact : createContact,
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
    if (images.length === 0) {
      return;
    }

    news.newsImage = images[0].name;
    await Storage.put(images[0].name, images[0]);

    await API.graphql({
      query: createNews,
      variables: { input: news },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toggleModal();
    setNews({
      newsLink: "",
      newsImage: "",
      newsYear: "",
      newsTitle: "",
      newsSource: "",
      newsDate: "",
    });
    setImages(null);
  }

  async function uploadImage() {
    imageFileInput.current.click();
  }

  async function uploadImageMain() {
    imageMainFileInput.current.click();
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
          <div className="modal-body">
            {isEditing ? (
              <div
                onClick={() => console.log(projectData.id)}
                className="modal-title"
              >
                <span>{props.modalTitle} edit</span>
              </div>
            ) : (
              <div className="modal-title">
                {props.modalTitle.endsWith("s") &&
                props.modalTitle !== "news" ? (
                  <span>New {props.modalTitle.slice(0, -1)}</span>
                ) : (
                  <span>New {props.modalTitle}</span>
                )}
              </div>
            )}

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
                    className={selectedTag === "images" ? "selectedTag" : null}
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
                          //onChange={(e) => onChange(e, "createProject")}
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

                  <button onClick={createNewProject}>{`Create project`}</button>
                </div>
              </>
            ) : selected === "studio" ? (
              <div className="modal-info-container">
                <Textarea
                  className="name-input"
                  onChange={(e) => onChange(e, "createStudio")}
                  name="aboutMe"
                  value={studio.aboutMe}
                  placeholder="About"
                />
                <Textarea
                  className="name-input"
                  onChange={(e) => onChange(e, "createStudio")}
                  name="philosophy"
                  value={studio.philosophy}
                  placeholder="Philosophy"
                />
                <Textarea
                  className="name-input"
                  onChange={(e) => onChange(e, "createStudio")}
                  name="route"
                  value={studio.route}
                  placeholder="Route"
                />
                <Textarea
                  className="name-input"
                  onChange={(e) => onChange(e, "createStudio")}
                  name="username"
                  value={studio.username}
                  placeholder="Username"
                />
                <input
                  className="images-input"
                  type="file"
                  ref={imageFileInput}
                  onChange={(e) => handleChange(e, "images")}
                  // multiple
                  // name="projectImages"
                  // value={project.projectImages}
                  placeholder="studioImages"
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
                <UploadImagebtn
                  onClick={uploadImage}
                  btnText={"Upload Images"}
                />
                <button
                  onClick={createNewStudio}
                >{`Create ${props.modalTitle}`}</button>
              </div>
            ) : selected === "home" ? (
              <div className="modal-info-container">
                <Input
                  className="name-input"
                  onChange={(e) => onChange(e, "createHome")}
                  name="name"
                  value={home.name}
                  placeholder="Image title"
                  label="name"
                />
                <input
                  className="images-input"
                  type="file"
                  id="file"
                  ref={imageFileInput}
                  onChange={(e) => handleChange(e, "images")}
                  accept="image/png, image/gif, image/jpeg"
                  // multiple
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
                <Input
                  className="name-input"
                  label="conceptTitle"
                  onChange={(e) => onChange(e, "createConcept")}
                  name="conceptTitle"
                  value={concept.conceptTitle}
                  placeholder="Concept Title"
                />
                <Input
                  className="name-input"
                  label="conceptText"
                  onChange={(e) => onChange(e, "createConcept")}
                  name="conceptText"
                  value={concept.conceptText}
                  placeholder="Concept Text"
                />
                <input
                  className="images-input"
                  type="file"
                  id="file"
                  ref={imageFileInput}
                  onChange={(e) => handleChange(e, "images")}
                  multiple
                  accept="image/png, image/gif, image/jpeg"
                  // name="projectImages"
                  // value={project.projectImages}
                  placeholder="Image"
                />
                <input
                  className="images-input"
                  type="file"
                  id="file"
                  ref={imageMainFileInput}
                  onChange={(e) => handleChange(e, "mainImage")}
                  // name="projectImages"
                  // value={project.projectImages}
                  accept="image/png, image/gif, image/jpeg"
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
                <UploadImagebtn
                  onClick={uploadImage}
                  btnText={"Upload Images"}
                />
                <UploadImagebtn
                  onClick={uploadImageMain}
                  btnText={"Upload Main Image"}
                />
                <button
                  onClick={createNewConcept}
                >{`Create ${props.modalTitle}`}</button>
              </div>
            ) : selected === "contact" ? (
              <div className="modal-info-container">
                <Textarea
                  // className="name-input"
                  onChange={(e) => onChange(e, "createContact")}
                  name="contactText"
                  value={contact.contactText}
                  placeholder="Contact Text"
                />
                <input
                  className="images-input"
                  type="file"
                  id="file"
                  ref={imageFileInput}
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => handleChange(e, "images")}
                  // name="projectImages"
                  //value={projectData.contactImage}
                  placeholder="Image"
                />
                {images &&
                  images.length !== 0 &&
                  Array.from(images).map((image) => (
                    <img
                      key={image.name}
                      alt="To upload"
                      src={
                        typeof image === "string"
                          ? image
                          : URL.createObjectURL(image)
                      }
                    />
                  ))}
                <UploadImagebtn
                  onClick={uploadImage}
                  btnText={"Upload Image"}
                />
                <button
                  onClick={createNewContact}
                >{`Create ${props.modalTitle}`}</button>
              </div>
            ) : selected === "news" ? (
              <div className="modal-info-container">
                <Input
                  // className="name-input"
                  onChange={(e) => onChange(e, "createNews")}
                  name="newsYear"
                  value={news.newsYear}
                  placeholder="Year"
                  label="newsYear"
                />
                <Input
                  // className="name-input"
                  onChange={(e) => onChange(e, "createNews")}
                  name="newsTitle"
                  value={news.newsTitle}
                  placeholder="Title"
                  label="newsTitle"
                />
                <Input
                  // className="name-input"
                  onChange={(e) => onChange(e, "createNews")}
                  name="newsDate"
                  value={news.newsDate}
                  placeholder="Date"
                  label="newsDate"
                />
                <Input
                  // className="name-input"
                  onChange={(e) => onChange(e, "createNews")}
                  name="newsSource"
                  value={news.newsSource}
                  placeholder="Source"
                  label="newsSource"
                  size="large"
                />
                <Input
                  // className="name-input"
                  onChange={(e) => onChange(e, "createNews")}
                  name="newsLink"
                  value={news.newsLink}
                  placeholder="Link"
                  label="newsLink"
                />
                <br />
                <br />
                <input
                  className="images-input"
                  type="file"
                  id="file"
                  ref={imageFileInput}
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => handleChange(e, "images")}
                  // name="projectImages"
                  //value={news.newsImage}
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
                <UploadImagebtn
                  onClick={uploadImage}
                  btnText={"Upload Image"}
                />
                <br />
                <br />
                <button
                  onClick={createNewNews}
                >{`Create ${props.modalTitle}`}</button>
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
}

export default withAuthenticator(Modal);
