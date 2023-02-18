import React from 'react';
import s from './Philosophy.module.css'


const Philosophy = () => {
    return (
        <div
            className={s.mid_section}>
            <div className={s.wrapper__grid}>
                <div className={s.mid_left__block}>
                    <div className={s.normal_wrapper}>
                        <h2 className={s.heading_55px__black__24px_bottom}>Философия и ценности</h2>
                        <p className={s.paragraph_18px__dark_grey}>Я думаю, что все хотят одного и того же - отношений с человечеством, мира с метафизикой и опыта общения со вселенной. Я пытаюсь понять эти вещи с помощью своих ценностей: аутентичность, креативность, и гостеприимство.</p>
                    </div>
                    {/* <a href="#" className={s.animated_link_button}>Больше обо мне</a> */}
                </div>
                <div className={s.mid_image}></div>
            </div>
        </div>
    );
};

export default Philosophy;