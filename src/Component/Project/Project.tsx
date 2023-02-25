import React from 'react';
import { NavLink } from 'react-router-dom';

const Project = ({ id, title, gitHubRepo, demo, image }: any) => {
    return (
        <div className="project">
            <div className="portfolio-item">
                <div className="image">
                    <img src={image} alt={title} />
                </div>
                {(gitHubRepo || demo) && <div className="hover-items">
                    <div className="icons" style={{ marginBottom: "15px" }}>
                        {gitHubRepo && <a href={gitHubRepo} className="icon" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>}
                        {demo && <a href={demo} className="icon" target="_blank">
                            <i className="fa fa-desktop"></i>
                        </a>}
                    </div>
                </div>}
            </div>
            <NavLink to={`/project/${id}`}>
                <h3 className="project__title">{title}</h3>
            </NavLink>
        </div>
    );
};

export default Project;