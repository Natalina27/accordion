import React, {useState} from 'react';
import {Accordion} from "../Accordion";

const source = [
    {
        question: 'What is your name?',
        answer: 'My name is Masha',
        id: '123',
        isOpen: false
    },
    {
        question: 'How old are you?',
        answer: 'I am 23',
        id: '456',
        isOpen: false
    },
    {
        question: 'What business are you doing?',
        answer: 'I am student',
        id: '789',
        isOpen: false
    }
];

export const App = () => {

    const [state, setState] = useState(source);

    const handleAnswerClick = (id) => {
        const newState = state.map(el => {
            el.isOpen = (el.id === id) ?  !el.isOpen : false;
            return el;
        })
        setState(newState);
    }

    return (
        <Accordion source={state}
                   handleAnswerClick={handleAnswerClick}
        />
    )
};
