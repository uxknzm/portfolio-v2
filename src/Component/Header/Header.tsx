import React from 'react';
import s from './Header.module.css'
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const imgAnimate = {
    hidden: {
        x: -100,
        opacity: 0
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
    const [nav, setNav] = React.useState(false);
    return (
        <header id='home' className={s.header}>
            <div className={s.wrapper}>
                <nav className={s.header_nav}>
                    <ul
                    //@ts-ignore 
                    className={ nav ? [s.nav_link__wrapper, s.active].join(' ') : [s.nav_link__wrapper]}>
                        <li>
                            <Link className={s.nav_link} to='home' spy={true} smooth={true} offset={-100} duration={500}>Главная</Link>
                        </li>
                        <li>
                            <Link className={s.nav_link} to='work' spy={true} smooth={true} offset={-100} duration={500}>Опыт</Link>
                        </li>
                        <li>
                            <Link className={s.nav_link} to='project' spy={true} smooth={true} offset={-100} duration={500}>Проекты</Link>
                        </li>
                        <li>
                            <Link className={s.nav_link} to='contacts' spy={true} smooth={true} offset={-100} duration={500}>Связь со мной</Link>
                        </li>
                    </ul>
                    <div onClick={() => setNav(!nav)} className={s.mobile_menu}>
                    {nav ? <AiOutlineClose  style={{color: 'white'}} size={50} /> : <AiOutlineMenu style={{color: 'white'}} size={50}  />}
                    </div>
                </nav>
                <div className={s.about_me} />
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className={s.myPhoto}>
                    <motion.div whileHover={{ scale: 1.03 }} custom={1} variants={imgAnimate}>
                        <img src="https://sun9-44.userapi.com/impg/1FuFAo1YB6cOQRfqSKUt6eSdblac_cgokWMkXQ/OSeshQkW6Fo.jpg?size=1440x1440&quality=95&sign=7efe197fcd9a2d039c4b90d9f85ab4d4&type=album" alt="MyPhoto" className={s.Muaz} />
                    </motion.div>
                    <div className={s.description_me}>
                        <motion.h1 custom={2} variants={imgAnimate}>Muaz Zelinkich</motion.h1>
                        <motion.h2 custom={3} variants={imgAnimate}>Junior Frontend Разработчик <br /> 23 года, Казань</motion.h2>
                        <motion.p custom={4} variants={imgAnimate}>Привет, я Муаз – Junior Frontend Разработчик из Казани.
                            Меня интересует веб-разработка и все, что с этим связано.
                            Я хочу стать профессионалом в этом деле.
                            Реализовывать отличные проекты
                            с замечательными людьми.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;