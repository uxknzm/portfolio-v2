import React from 'react';

const Home = () => {
    return (
        <div className="container header active">
            <div className="header-content">
                <div className="left-header">
                    <div className="h-shape"></div>
                    <div className="image">
                        <img src="https://sun9-53.userapi.com/impg/hWCeKQPzPZT5SiGQhmmBH_wgaeNOJ2bHzksEvA/vMEyEed5VWs.jpg?size=2560x2560&quality=95&sign=e0f6a9065f3a441b5795f9d3a0ee3be5&type=album" alt="" />
                    </div>
                </div>
                <div className="right-header">
                    <h1 className="name">
                        Hi, I'm <span>Muaz Zelinkich. </span>
                        A Web Developer.
                    </h1>
                    <p>
                        I'm a Frontend Developer from Kazan,
                        23 years old. I am interested in web development and everything related to it. I want to become a professional in this business. 
                        Implement great projects with great people!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;