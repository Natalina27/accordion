import React from 'react';
import {QA} from "../QA";

import Styles from './styles.module.scss';

export const Accordion = ({source, title}) => {



    const qaJSX = () => source.map(({id, isOpen, ...source}, index)=>
        <QA key={id}
            id={id}
            isOpen={isOpen}
            source={source}
            index={index}
        />);

    return (
        <section className={Styles.accordion}>
            <h1>{title}</h1>
            {qaJSX()}
        </section>
    );
};

Accordion.defaultProps = {
    title: 'Accordion'
}
