import React from 'react';
import s from './Philosophy.module.css'
import { motion } from 'framer-motion'


const imgAnimate = {
    hidden: {
        scale: 0
    },
    visible:
    {
        scale: 1,
        transition: { duration: 0.8 }
    }
}

const textAnimate = {
    hidden: {
        scale: 0
    },
    visible:
    {
        scale: 1,
        transition: { duration: 0.8 }
    }
}

const Philosophy = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            className={s.mid_section}>
            <div className={s.wrapper__grid}>
                <motion.div variants={textAnimate} className={s.mid_left__block}>
                    <div className={s.normal_wrapper}>
                        <h2 className={s.heading_55px__black__24px_bottom}>Философия и ценности</h2>
                        <p className={s.paragraph_18px__dark_grey}>Я думаю, что все хотят одного и того же - отношений с человечеством, мира с метафизикой и опыта общения со вселенной. Я пытаюсь понять эти вещи с помощью своих ценностей: аутентичность, креативность, и гостеприимство.</p>
                    </div>
                    {/* <a href="#" className={s.animated_link_button}>Больше обо мне</a> */}
                </motion.div>
                <motion.div variants={imgAnimate} className={s.mid_image}></motion.div>
            </div>
        </motion.div>
    );
};

export default Philosophy;