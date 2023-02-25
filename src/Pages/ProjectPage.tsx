import React from 'react';
import { useParams } from 'react-router-dom';
import BtnGitHub from '../Component/GitHubBtn/GitHubBtn';
import { projects } from '../Component/helpers/PojectList';

type Project = {
    id: string,
    title: string,
    image: string,
    skills: string,
    gitHubRepo?: string,
    demo?: string
} | undefined

const ProjectPage = () => {
    const { id } = useParams();
    const project: Project = projects.find((project) => project.id === id);

    if (!project) {
        return (
            <section className="container active">
                <div className="project-container">
                    <div className="project-details">
                        Ничего не найдено...
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="container active">
                <div className="project-container">
                    <div className="project-details">
                        <h1 className="title-project">{project.title}</h1>
                        {project.demo ? <iframe className="project-details__cover" title={project.title} style={{ width: "1440px", height: "750px", border: 0 }} src={project.demo} /> : <img src={project.image} alt={project.title} className="project-details__cover" />}
                        <div className="project-details__desc">
                            <p>Skills: {project.skills}</p>
                        </div>
                        {project.gitHubRepo && (
                            <BtnGitHub link={project.gitHubRepo} />
                        )}
                    </div>
                </div>
            </section>
        );
    };
};

export default ProjectPage;