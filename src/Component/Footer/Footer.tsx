import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper__footer_grid}>
                <div className={s.normal_wrapper__flex_vertical_left}>
                    <div className={s.normal_wrapper}>
                        <a href="/" className={s.footer_logo__w_inline_block__w}>
                            <h1>Zelinkich.M</h1>
                        </a>
                        {/* <div className={s.normal_wrapper}>
                            <a href="#" className={s.social_link_block__w_inline_block}>
                                <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5abd4f38827a4d665c_Twitter.svg" alt="" className={s.social_icons} />
                            </a>
                            <a href="#" className={s.social_link_block__w_inline_block}>
                                <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5a150085c724f9cb68_Dribbble.svg" alt="" className={s.social_icons} />
                            </a>
                            <a href="#" className={s.social_link_block__w_inline_block}>
                                <img src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5a3b95d2040fb3044d_LinkedIn.svg" alt="" className={s.social_icons}/>
                            </a>
                        </div> */}
                    </div>
                </div>
                <div>
                    <div className={s.paragraph_16px__light_grey}>No Copyright 2022 • Muaz Zelinkich. React JS</div>
                    <a href="https://reactjs.org/" className={s.paragraph_16px__cyan}>Created by React JS</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;