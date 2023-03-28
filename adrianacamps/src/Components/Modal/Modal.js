import React, {useRef, useState} from "react";
import {v4 as uuid} from "uuid";
import "./style/modal.scss";
import "easymde/dist/easymde.min.css";
import {API, Storage} from "aws-amplify";
import {
    createConcept,
    createContact,
    createHome,
    createNews,
    createProjects,
    createStudio
} from "../../graphql/mutations";
import {withAuthenticator} from "@aws-amplify/ui-react";

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
    const [project, setProject] = useState(initialState);
    const [home, setHome] = useState({
        carrouselImages: []
    })
    const [studio, setStudio] = useState({
        aboutImage: [],
        aboutMe: '',
        philosophy: '',
        route: '',
        username: ''
    })
    const [concept, setConcept] = useState({
        conceptsImageMain: '',
        conceptImages: [],
        conceptTitle: '',
        conceptText: '',
    })
    const [contact, setContact] = useState({
        contactImage: '',
        contactText: '',
    });
    const [news, setNews] = useState({
        newsYear: '',
        newsTitle: '',
        newsDate: '',
        newsSource: '',
        newsLink: ''
    })
    const [images, setImages] = useState(null);
    const [imageMain, setImageMain] = useState(null)
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
    } = project;

    function onChange(e, table) {
        if (table === 'createProject') {
            setProject(() => ({
                ...project,
                [e.target.name]: e.target.value,
            }));
        } else if (table === 'createStudio') {
            setStudio(() => ({
                ...studio,
                [e.target.name]: e.target.value,
            }));
        } else if (table === 'createConcept') {
            setConcept(() => ({
                ...concept,
                [e.target.name]: e.target.value,
            }));
        } else if (table === 'createContact') {
            setContact(() => ({
                ...contact,
                [e.target.name]: e.target.value,
            }));
        } else if (table === 'createNews') {
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
            project.projectImages = Array.from(images).map(img => img.name).join(',');
            Array.from(images).map(async image => {
                await Storage.put(image.name, image);
            })
        }
        await API.graphql({
            query: createProjects,
            variables: {input: project},
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        toggleModal();
        setHome(initialState);
        setImages(null)
    }

    async function createNewHome() {
        if (images.length !== 0) {
            home.carrouselImages = Array.from(images).map(img => img.name)
            Array.from(images).map(async image => {
                await Storage.put(image.name, image);
            })
        }
        await API.graphql({
            query: createHome,
            variables: {input: home},
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        toggleModal();
        setHome({carrouselImages: []});
        setImages(null)
    }

    async function createNewStudio() {
        if (images.length !== 0) {
            studio.aboutImage = Array.from(images).map(img => img.name)
            Array.from(images).map(async image => {
                await Storage.put(image.name, image);
            })
        }
        await API.graphql({
            query: createStudio,
            variables: {input: studio},
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        toggleModal();
        setStudio({
            aboutImage: [],
            aboutMe: '',
            philosophy: '',
            route: '',
            username: ''
        });
        setImages(null)
    }

    async function createNewConcept() {
        if (images.length !== 0) {
            concept.conceptImages = Array.from(images).map(img => img.name)
            concept.conceptsImageMain = imageMain.name
            await Storage.put(imageMain.name, imageMain);
            Array.from(images).map(async image => {
                await Storage.put(image.name, image);
            })
        }
        await API.graphql({
            query: createConcept,
            variables: {input: concept},
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        toggleModal();
        setConcept({
            conceptsImageMain: '',
            conceptImages: [],
            conceptTitle: '',
            conceptText: '',
        });
        setImages(null)
    }

    async function createNewContact() {
        if (images.length !== 0) {
            contact.contactImage = images[0].name
            await Storage.put(images[0].name, images[0]);
        }
        await API.graphql({
            query: createContact,
            variables: {input: contact},
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        toggleModal();
        setContact({
            contactImage: '',
            contactText: '',
        });
        setImages(null)
    }

    async function createNewNews() {
        await API.graphql({
            query: createNews,
            variables: {input: news},
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        toggleModal();
        setConcept({
            conceptsImageMain: '',
            conceptImages: [],
            conceptTitle: '',
            conceptText: '',
        });
        setImages(null)
    }

    async function uploadImage() {
        imageFileInput.current.click();
    }

    function handleChange(e, imgType) {
        const fileUploaded = e.target.files;
        if (!fileUploaded) return;
        imgType === 'images' ?
            setImages(fileUploaded) : setImageMain(fileUploaded[0]);
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
                                <input
                                    className="name-input"
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
                                <span>{props.modalTitle} add</span>
                            </div>
                            {/* <div className="modal-nav">{props.navTabs}</div> */}
                            {selected === "projects" ? (
                                    <div className="modal-info-container">
                                        <input
                                            className="name-input"
                                            onChange={(e) => onChange(e, 'createProject')}
                                            name="name"
                                            value={project.name}
                                            placeholder="name"
                                        />
                                        <input
                                            className="client-input"
                                            onChange={(e) => onChange(e, 'createProject')}
                                            name="client"
                                            value={project.client}
                                            placeholder="client"
                                        />
                                        <input
                                            className="location-input"
                                            onChange={(e) => onChange(e, 'createProject')}
                                            name="location"
                                            value={project.location}
                                            placeholder="location"
                                        />
                                        <input
                                            className="subName-input"
                                            onChange={(e) => onChange(e, 'createProject')}
                                            name="subName"
                                            value={project.subName}
                                            placeholder="subName"
                                        />
                                        <input
                                            className="desc-input"
                                            onChange={(e) => onChange(e, 'createProject')}
                                            name="description"
                                            value={project.description}
                                            placeholder="description"
                                        />
                                        <input
                                            className="subDesc-input"
                                            onChange={(e) => onChange(e, 'createProject')}
                                            name="subDescription"
                                            value={project.subDescription}
                                            placeholder="subDescription"
                                        />
                                        <input
                                            className="photographer-input"
                                            onChange={(e) => onChange(e, 'createProject')}
                                            name="photographer"
                                            value={project.photographer}
                                            placeholder="photographer"
                                        />
                                        <input
                                            className="surface-input"
                                            onChange={(e) => onChange(e, 'createProject')}
                                            name="surface"
                                            value={project.surface}
                                            placeholder="surface"
                                        />
                                        <input
                                            // className="images-input"
                                            type="file"
                                            ref={imageFileInput}
                                            onChange={e => handleChange(e, 'images')}
                                            multiple
                                            // name="projectImages"
                                            // value={project.projectImages}
                                            // placeholder="projectImages"
                                        />
                                        {images && images.length !== 0 && (
                                            Array.from(images).map(image => (
                                                <img key={image.name} alt="To upload"
                                                     src={URL.createObjectURL(image)}/>
                                            ))
                                        )}
                                        <button
                                            onClick={createNewProject}
                                        >{`Create ${props.modalTitle}`}</button>
                                        <button onClick={uploadImage}>{`Upload Image`}</button>
                                    </div>
                                ) :
                                selected === 'studio' ? (
                                        <div className="modal-info-container">
                                            <input
                                                className="name-input"
                                                onChange={(e) => onChange(e, 'createStudio')}
                                                name="aboutMe"
                                                // value={project.name}
                                                placeholder="About"
                                            />
                                            <input
                                                // className="images-input"
                                                type="file"
                                                ref={imageFileInput}
                                                onChange={e => handleChange(e, 'images')}
                                                multiple
                                                // name="projectImages"
                                                // value={project.projectImages}
                                                placeholder="projectImages"
                                            />
                                            {images && images.length !== 0 && (
                                                Array.from(images).map(image => (
                                                    <img key={image.name} alt="To upload"
                                                         src={URL.createObjectURL(image)}/>
                                                ))
                                            )}
                                            <button
                                                onClick={createNewStudio}
                                            >{`Create ${props.modalTitle}`}</button>
                                            <button onClick={uploadImage}>{`Upload Image`}</button>
                                        </div>
                                    ) :
                                    selected === 'home' ? (
                                            <div className="modal-info-container">
                                                <input
                                                    className="name-input"
                                                    onChange={(e) => onChange(e, 'createHome')}
                                                    name="name"
                                                    // value={project.name}
                                                    placeholder="Image title"
                                                />
                                                <input
                                                    // className="images-input"
                                                    type="file"
                                                    id="file"
                                                    ref={imageFileInput}
                                                    onChange={e => handleChange(e, 'images')} multiple
                                                    // name="projectImages"
                                                    // value={project.projectImages}
                                                    placeholder="Image"
                                                />
                                                {images && images.length !== 0 && (
                                                    Array.from(images).map(image => (
                                                        <img key={image.name} alt="To upload"
                                                             src={URL.createObjectURL(image)}/>
                                                    ))
                                                )}
                                                <button
                                                    onClick={createNewHome}
                                                >{`Create ${props.modalTitle}`}</button>
                                                <button onClick={uploadImage}>{`Upload Image`}</button>
                                            </div>
                                        ) :
                                        selected === 'concepts' ? (
                                                <div className="modal-info-container">
                                                    <input
                                                        // className="name-input"
                                                        onChange={(e) => onChange(e, 'createConcept')}
                                                        name="conceptText"
                                                        // value={project.name}
                                                        placeholder="Concept Text"
                                                    />
                                                    <input
                                                        // className="text-input"
                                                        onChange={(e) => onChange(e, 'createConcept')}
                                                        name="conceptTitle"
                                                        // value={project.name}
                                                        placeholder="Concept Title"
                                                    />
                                                    <input
                                                        // className="images-input"
                                                        type="file"
                                                        id="file"
                                                        ref={imageFileInput}
                                                        onChange={e => handleChange(e, 'images')}
                                                        multiple
                                                        // name="projectImages"
                                                        // value={project.projectImages}
                                                        placeholder="Image"
                                                    />
                                                    <input
                                                        // className="images-input"
                                                        type="file"
                                                        id="file"
                                                        ref={imageFileInput}
                                                        onChange={e => handleChange(e, 'mainImage')}
                                                        // name="projectImages"
                                                        // value={project.projectImages}
                                                        placeholder="Image Main"
                                                    />
                                                    {images && images.length !== 0 && (
                                                        Array.from(images).map(image => (
                                                            <img key={image.name} alt="To upload"
                                                                 src={URL.createObjectURL(image)}/>
                                                        ))
                                                    )}
                                                    {imageMain && (
                                                        <img key={imageMain.name} alt="To upload"
                                                             src={URL.createObjectURL(imageMain)}/>
                                                    )}
                                                    <button
                                                        onClick={createNewConcept}
                                                    >{`Create ${props.modalTitle}`}</button>
                                                    <button onClick={uploadImage}>{`Upload Image`}</button>
                                                </div>
                                            ) :
                                            selected === "contact" ? (
                                                    <div className="modal-info-container">
                                                        <input
                                                            // className="name-input"
                                                            onChange={(e) => onChange(e, 'createContact')}
                                                            name="contactText"
                                                            // value={project.name}
                                                            placeholder="Contact Text"
                                                        />
                                                        <input
                                                            // className="images-input"
                                                            type="file"
                                                            id="file"
                                                            ref={imageFileInput}
                                                            onChange={e => handleChange(e, 'images')}
                                                            // name="projectImages"
                                                            // value={project.projectImages}
                                                            placeholder="Image"
                                                        />
                                                        {images && images.length !== 0 && (
                                                            Array.from(images).map(image => (
                                                                <img key={image.name} alt="To upload"
                                                                     src={URL.createObjectURL(image)}/>
                                                            ))
                                                        )}
                                                        <button
                                                            onClick={createNewContact}
                                                        >{`Create ${props.modalTitle}`}</button>
                                                        <button onClick={uploadImage}>{`Upload Image`}</button>
                                                    </div>
                                                ) :
                                                selected === "news" ? (
                                                        <div className="modal-info-container">
                                                            <input
                                                                // className="name-input"
                                                                onChange={(e) => onChange(e, 'createNews')}
                                                                name="newsYear"
                                                                // value={project.name}
                                                                placeholder="Year"
                                                            />
                                                            <input
                                                                // className="name-input"
                                                                onChange={(e) => onChange(e, 'createNews')}
                                                                name="newsTitle"
                                                                // value={project.name}
                                                                placeholder="Title"
                                                            />
                                                            <input
                                                                // className="name-input"
                                                                onChange={(e) => onChange(e, 'createNews')}
                                                                name="newsDate"
                                                                // value={project.name}
                                                                placeholder="Date"
                                                            />
                                                            <input
                                                                // className="name-input"
                                                                onChange={(e) => onChange(e, 'createNews')}
                                                                name="newsSource"
                                                                // value={project.name}
                                                                placeholder="Source"
                                                            />
                                                            <input
                                                                // className="name-input"
                                                                onChange={(e) => onChange(e, 'createNews')}
                                                                name="newsLink"
                                                                // value={project.name}
                                                                placeholder="Link"
                                                            />
                                                            <button
                                                                onClick={createNewNews}
                                                            >{`Create ${props.modalTitle}`}</button>
                                                        </div>
                                                    ) :
                                                    null
                            }
                        </div>
                    )}
                </>
            ) : null}
        </>
    );
}

export default withAuthenticator(Modal);
