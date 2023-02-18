import React from 'react';
import s from './Skills.module.css'
import { motion } from 'framer-motion'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'



const style = { color: "#b3e5fc", fontSize: "3em", marginRight: '24px', verticalAlign: 'middle',
display: 'inline-block', borderRadius: '10px' }

const skillsArr = [
    {
        id: 1,
        image: <SiJavascript style={style} />,
        title: 'JavaScript (ES6+)',
        description: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'
    },
    {
        id: 2,
        image: <SiTypescript style={style} />,
        title: 'TypeScript',
        description: 'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript. Разработчиком языка TypeScript является Андерс Хейлсберг, создавший ранее Turbo Pascal, Delphi и C#.'
    },
    {
        id: 3,
        image: <SiReact style={style} />,
        title: 'React JS',
        description: 'Популярная JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.'
    },
    {
        id: 4,
        image: <SiRedux style={style} />,
        title: 'Redux',
        description: 'Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.'
    },
]

const skillAnimate = {
    hidden: {
        opacity: 0
    },
    visible: (custom: any) => (
        {
            opacity: 1,
            transition: { delay: custom * 0.2 }
        }
    )
}

const Skills = () => {
    return (
        <div className={s.skills_section}>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                className={s.wrapper_col}>
                <div className={s.normal_wrapper}>
                    <h2 className={s.heading_55px__24px_bottom}>Skills</h2>
                </div>
                {skillsArr.map(skill => <motion.div 
                custom={skill.id}
                variants={skillAnimate}
                whileHover={{ scale: 1.1 }} key={skill.id} className={s.skills_wrapper__48px_right_p}>
                    <div className={s.wrapper_title}>
                    {skill.image}
                    <h3 className={s.heading_24px}>{skill.title}</h3>
                    </div>
                    <p className={s.paragraph_16px__light_grey}>{skill.description}</p>
                </motion.div>)}
            </motion.div>
        </div>
    );
};

export default Skills;