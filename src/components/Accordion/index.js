import React from 'react';
import {QA} from "../QA";

import s from './styles.module.scss';

export const Accordion = ({source, title, openAnswer,handleAnswerClick }) => {

    const qaJSX = () => source.map(({id, isOpen, ...source}, index) =>
        <QA key={id}
            id={id}
            isOpen={isOpen}
            source={source}
            index={index}
            handleAnswerClick={handleAnswerClick}
            openAnswer={openAnswer}
        />);

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
