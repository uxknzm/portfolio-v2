import React from 'react';
import { aboutItems } from '../helpers/AboutItemsList';
import { skills } from '../helpers/SkillsList';

const About = () => { 
    return (
        <section className="container about active">
            <div className="main-title">
                <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Information About me</h4>
                    <p>
                        I'm a Frontend Developer from Kazan, 23 years old.
                        I am interested in web development and everything related to it.
                        I want to become a professional in this business.
                        Implement great projects with great people!
                    </p>
                </div>
                <div className="right-about">
                    {aboutItems.map((item) => {
                        return <div className="about-item" key={item.id}>
                            <div className="abt-text">
                                <p className="large-text">{item.number}</p>
                                <p className="small-text">{item.text}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    {skills.map((skill)=> {
                        return <div className="progress-bar" key={skill.id}>
                        <p className="prog-title">{skill.title}</p>
                        <div className="progress-con">
                            <p className="prog-text">{skill.progress}</p>
                            <div className="progress">
                                <span className={skill.class}></span>
                            </div>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;