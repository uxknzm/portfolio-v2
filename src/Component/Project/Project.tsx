import React from 'react';
import s from './Project.module.css'
import { motion } from 'framer-motion'


const projectLeft = [
    {
        id: 1,
        link: 'https://github.com/uxknzm',
        title: 'Профиль на Github',
        description: 'Полный список проектов можно посмотреть тут:)',
        image: 'https://sun9-65.userapi.com/impg/4K0qdtfMx72Pq17UeQ7LCUILzVHUzs_FWHwiZQ/5bZLa5c4wSY.jpg?size=1318x784&quality=96&sign=8b849389674739da4e3b8278f7e5bc7e&type=album'
    },
    {
        id: 3,
        link: 'https://uxknzm.github.io/test-task-ToDo/',
        title: 'TodoList',
        description: 'Тестовое на позицию React developer. Добавление/удаление задач, отметкой конкретной задачи выполненной, фильтр: (все, выполненные, не выполненные), адаптивная верстка, запрос API, сохранение в LocalStorage, Bootstrap v 5.0, TypeScript, MobX',
        image: 'https://sun9-70.userapi.com/impg/_P9K5hl215ySCd8-dsL2RZVyChmHH0-I3b5AHA/rv46vkkvva0.jpg?size=1143x600&quality=96&sign=b6d990d2e697f954d0c918772f7502de&type=album',
    },
]

const projectRight = [
    {
        id: 2,
        link: 'https://uxknzm.github.io/',
        title: 'React Pizza',
        description: 'Интернет магазин пиццы. Стек: TypeScript + Redux, React Router Dom, LocalStorage, SCSS, Axios',
        image: 'https://sun9-11.userapi.com/impg/SYVX8hPcVOr_aJNLY4Ioz4sH3fdQRL-BxsZfvg/anuSEBJ-_JM.jpg?size=1579x807&quality=96&sign=5a6ae20156add40fe03e23bdb6d2ea73&type=album'
    },
    {
        id: 4,
        link: 'https://uxknzm.github.io/react-test-task/',
        title: 'Тестовое задание',
        description: 'Тестовое на позицию React developer. Адаптивная верстка, запрос API. TypeScript, Redux',
        image: 'https://sun9-20.userapi.com/impg/syvkrrJVTZ9q_UiaL-FT5mnMt4QRADLJ57aERQ/rmHlROI8Yfw.jpg?size=1680x849&quality=96&sign=751aa7484fc521ca695c8dadba6b644f&type=album',
    },
]

const projectAnimate = {
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

const Project = () => {
    return (
        <div id='project' className={s.projects_section}>
            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            className={s.wrapper__projects_grid}>
                <div className={s.normal_wrapper}>
                    <div className={s.normal_wrapper__48px_right_p__80px_bottom_m}>
                        <div className={s.overline_16px}>МОИ ПРОЕКТЫ</div>
                        <h2 className={s.heading_55px}>Мои практические работы и Github.</h2>
                    </div>
                    {projectLeft.map(p => <motion.a custom={p.id} variants={projectAnimate} whileHover={{ scale: 1.03 }} key={p.id} href={p.link} className={s.project_wrapper__24px_bottom_m__w_inline_block}>
                        <img src={p.image} width="868" alt="screen" className={s.project_image} />
                        <div className={s.project_description}><h3 className={s.heading_24px}>{p.title}</h3>
                            <p className={s.paragraph_18px__light_grey}>{p.description}</p>
                        </div>
                    </motion.a>)}
                </div>
                <div className={s.normal_wrapper}>
                    {projectRight.map(pr => <motion.a custom={pr.id} variants={projectAnimate} whileHover={{ scale: 1.03 }} key={pr.id} href={pr.link} className={s.project_wrapper__24px_bottom_m__w_inline_block}>
                        <img src={pr.image} width="868" alt="screen" className={s.project_image} />
                        <div className={s.project_description}>
                            <h3 className={s.heading_24px}>{pr.title}</h3>
                            <p className={s.paragraph_18px__light_grey}>{pr.description}</p>
                        </div>
                    </motion.a>)}
                </div>
            </motion.div>
        </div>
    );
};

export default Project;