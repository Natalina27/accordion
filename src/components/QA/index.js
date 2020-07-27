import React, {useState} from 'react';
import clx from "classnames";

import s from './styles.module.scss';

export const QA = ({index, isOpen, source }) => {

    const [openAnswer, setOpenAnswer] = useState(isOpen);

    const handleAnswerClick = () => {
        setOpenAnswer(!openAnswer);
    }

    const style = clx({
        [s.accordionItem]:true,
        [s.selected]: openAnswer
    });

    return (
        <div className={style}>
            <div className={s.accordionQuestion} onClick={handleAnswerClick}>
                <span>{index+1}.{source.question}</span>
            </div>
            <p className={s.accordionAnswer}>
                {source.answer}
            </p>
        </div>
    );
};

