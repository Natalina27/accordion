import React from 'react';
import clx from "classnames";

import s from './styles.module.scss';

export const QA = ({idx, source, handleAnswerClick }) => {

    const style = clx({
        [s.accordionItem]:true,
        [s.selected]: source.isOpen
    });
    console.log(source);
    return (
        <div className={style}>
            <div className={s.accordionQuestion} onClick={()=>handleAnswerClick(source.id)}>
                <span>{idx+1}.{source.question}</span>
            </div>
            <p className={s.accordionAnswer}>
                {source.answer}
            </p>
        </div>
    );
};

