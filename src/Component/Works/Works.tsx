import React from 'react';
import s from './Works.module.css'
import { motion } from 'framer-motion'

const workState = [
    {
        id: 1,
        number: '01',
        chanel: 'IT-KAMASUTRA',
        name: 'React JS - путь самурая',
        description: 'В рамках данного курса разработали большой проект, с применением библиотек React и Redux (Thunk, Axios, Saga).'
    },
    {
        id: 2,
        number: '02',
        chanel: 'Archakov Blog',
        name: 'React Pizza v2',
        description: 'React Pizza V2 — Это обновлённый курс на 2022 год для уровня Junior/Junior+, одного из самых популярных курсов 🔥 по ReactJS для начинающих.'
    },
    {
        id: 3,
        number: '03',
        chanel: 'IT-KAMASUTRA',
        name: 'React JS - Путь Самурая 2.0',
        description: 'Бесплатный курс "React - Путь самурая 2.0" - это продолжение первого сезона.'
    },
]

const divAnimate = {
    hidden: {
        x: -250,
        opacity: 0,
    },
    visible: (custom: any) => (
        {
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.5 }
        }
    )
}

const Works = () => {
    return (
        <div id='work' className={s.wrapper}>
            <div className={s.flex_vertical_left_top}>
                <div className={s.overline_16px}>ПРОЙДЕННЫЕ КУРСЫ</div>
                <h2 className={s.heading_55px}>Курсы которые я проходил в учебных целях.</h2>
            </div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                className={s.w_layout_grid__experience_grid}>
                {workState.map(k =>
                    <motion.div
                        custom={k.id}
                        variants={divAnimate}
                        key={k.id} className={s.experience_block}>
                        <div className={s.number}>{k.number}</div>
                        <h3 className={s.heading_24px}>
                            <span className={s.pink}>{k.chanel}</span>, {k.name}</h3>
                        <p className={s.paragraph_16px}>{k.description}</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default Works;