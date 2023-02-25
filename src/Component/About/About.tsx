import React from 'react';

const About = () => {

    const aboutItems = [{
        id: 0,
        number: "13",
        text: "repositories on gitHub"
    }, {
        id: 1,
        number: "1+",
        text: "Years of experience"
    }];

    const skills = [{
        id: 0,
        title: "html",
        progress: "80%",
        class: "html"
    }, {
        id: 1,
        title: "css",
        progress: "80%",
        class: "css"
    }, {
        id: 2,
        title: "javascript",
        progress: "60%",
        class: "js"
    }, {
        id: 3,
        title: "reactjs",
        progress: "60%",
        class: "react"
    }, {
        id: 4,
        title: "node js",
        progress: "20%",
        class: "node"
    }, {
        id: 5,
        title: "redux",
        progress: "50%",
        class: "redux"
    }];
    
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