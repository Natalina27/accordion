import React from 'react';
import clx from "classnames";

import s from './styles.module.scss';

export const QA = ({index, source, openAnswer, handleAnswerClick, id }) => {

    const style = clx({
        [s.accordionItem]:true,
        [s.selected]: openAnswer
    });

    return (
        <div className={style}>
            <div className={s.accordionQuestion} onClick={()=>handleAnswerClick(id)}>
                <span>{index+1}.{source.question}</span>
            </div>
            <p className={s.accordionAnswer}>
                {source.answer}
            </p>
        </div>
    );
};

