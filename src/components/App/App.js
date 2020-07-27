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
  const {isOpen} = source;
  const [openAnswer, setOpenAnswer] = useState(isOpen);

  const handleAnswerClick = (id) => {
    source.map(el => el.id === id && setOpenAnswer(!openAnswer));
  }

  return (
      <Accordion source={source}
                 openAnswer={openAnswer}
                 handleAnswerClick={handleAnswerClick}
      />
  )
};
