import React, {useState} from 'react';
import clx from "classnames";
import Styles from './styles.module.scss';

export const QA = ({index, isOpen, source }) => {

    const [openAnswer, setOpenAnswer] = useState(isOpen);

    const handleAnswerClick = () => {
        setOpenAnswer(!openAnswer);
    }

    const style = clx({
        [Styles.accordionItem]:true,
        [Styles.selected]: openAnswer
    });

    return (
        <div className={style}>
            <div className={Styles.accordionQuestion} onClick={handleAnswerClick}>
                <span>{index+1}.{source.question}</span>
            </div>
            <p className={Styles.accordionAnswer}>
                {source.answer}
            </p>
        </div>
    );
};

