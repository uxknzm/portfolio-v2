import React from 'react';
import s from './Header.module.css'
import { motion } from 'framer-motion';

const imgAnimate = {
    hidden: {
        x: 50,
        opacity: 0,
    },
    visible: (custom: any) => (
        {
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.4 }
        }
    )
}

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <nav className={s.header_nav}>
                    <a className={s.active} href="#about"><h1>Portfolio</h1></a>
                    <ul className={s.nav_link__wrapper}>
                        <li><a className={s.nav_link} href="#home">Главная</a></li>
                        <li><a className={s.nav_link} href="#news">Курсы</a></li>
                        <li><a className={s.nav_link} href="#contact">Портфолио</a></li>
                        <li><a className={s.nav_link} href="#contact">Связь со мной</a></li>
                    </ul>
                </nav>
                <div className={s.about_me}/>
                <motion.div 
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className={s.myPhoto}>
                    <motion.div custom={1} variants={imgAnimate}>
                        <img src="https://sun9-53.userapi.com/impg/hWCeKQPzPZT5SiGQhmmBH_wgaeNOJ2bHzksEvA/vMEyEed5VWs.jpg?size=2560x2560&quality=95&sign=e0f6a9065f3a441b5795f9d3a0ee3be5&type=album" alt="MyPhoto" className={s.Muaz} />
                    </motion.div>
                    <div className={s.about_me}>
                        <motion.h1 custom={2} variants={imgAnimate}>Muaz Zelinkich</motion.h1>
                        <motion.h2 custom={3} variants={imgAnimate}>Junior Frontend Developer <br /> 23 years old, Kazan</motion.h2>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;