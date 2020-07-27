import React from 'react';
import {QA} from "../QA";

import s from './styles.module.scss';

export const Accordion = ({source,title, handleAnswerClick }) => {

    const qaJSX = () => source.map((item, index) =>{
        return <QA key={item.id}
            idx={index}
            source={item}
            handleAnswerClick={handleAnswerClick}
        />
    })

    return (
        <section className={s.accordion}>
            <h1>{title}</h1>
            {qaJSX()}
        </section>
    );
};

Accordion.defaultProps = {
    title: 'Accordion'
}
