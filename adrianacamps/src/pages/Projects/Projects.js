import React, {useEffect, useState} from "react";
import "../../configureAmplify";
import {API, Storage} from "aws-amplify";
import {listProjects} from "../../graphql/queries";
//Components
import ContentContainer from "../../Components/ContentContainer";
import ProjectContent from "../../Components/ProjectContent/ProjectContent";
import WebNav from "../../Components/WebNav";
//Layout
import MainPageLayout from "../../layouts/MainPageLayout";

//Images

function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetchProjects();
    }, []);

    async function fetchProjects() {
        const projectData = await API.graphql({query: listProjects});
        const {items} = projectData.data.listProjects;
        const projectsWithImages = [];
        for (let index = 0; index < items.length; index++) {
            let project = items[index];
            if (project.projectImages) {
                let projectsImagesList = [];
                for (let idx = 0; idx < project.projectImages.split(',').length; idx++) {
                    projectsImagesList.push(await Storage.get(project.projectImages.split(',')[idx]))
                }
                project.projectImages = projectsImagesList;
            }
            projectsWithImages.push(project);
        }
        setProjects(projectsWithImages)
    }

    return (
        <>
            <MainPageLayout backgroundColor={"beige"}>
                <WebNav/>
                <ContentContainer>
                    <div className="project-body">
                        <ProjectContent data={projects}/>
                    </div>
                </ContentContainer>
            </MainPageLayout>
        </>
    );
}

export default Projects;
