import React from 'react';
import { projects } from '../helpers/PojectList';
import Project from '../Project/Project';

const Portfolio = () => {
    return (
        <section className="container active">
            <div className="main-title">
                <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
            </div>
            <p className="port-text">
                Here are some of my works that I have completed
            </p>
            <div className="portfolios">
                {projects.map((project) => {
                    return <Project
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        image={project.image}
                        gitHubRepo={project.gitHubRepo}
                        demo={project.demo}
                    />
                })}
            </div>
        </section>
    );
};

export default Portfolio;