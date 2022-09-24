import React from 'react';
import s from './Skills.module.css'
import { motion } from 'framer-motion'


const skillsArr = [
    {
        id: 1,
        image: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/javascript_logo_icon_168607.png',
        title: 'JavaScript (ES6+)',
        description: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'
    },
    {
        id: 2,
        image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png',
        title: 'TypeScript',
        description: 'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript. Разработчиком языка TypeScript является Андерс Хейлсберг, создавший ранее Turbo Pascal, Delphi и C#.'
    },
    {
        id: 3,
        image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png',
        title: 'React JS',
        description: 'Популярная JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.'
    },
    {
        id: 4,
        image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png',
        title: 'Redux',
        description: 'Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.'
    },
]

const Skills = () => {
    return (
        <div className={s.skills_section}>
            <div className={s.wrapper_col}>
                <div className={s.normal_wrapper}>
                    <h2 className={s.heading_55px__24px_bottom}>Skills</h2>
                </div>
                {skillsArr.map(skill => <motion.div whileHover={{ scale: 1.1 }} key={skill.id} className={s.skills_wrapper__48px_right_p}>
                    <img src={skill.image} alt="logo" className={s.skill_icon} />
                    <h3 className={s.heading_24px}>{skill.title}</h3>
                    <p className={s.paragraph_16px__light_grey}>{skill.description}</p>
                </motion.div>)}
            </div>
        </div>
    );
};

export default Skills;