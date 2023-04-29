import React, {useState} from 'react';
import MyButton from './MyButton';
import {AnswerState} from './Quiz';

interface IAnswer {
  answer: string;
  onAnswerPressed: (answerNumber: number) => void;
  answerNumber: number;
  answerState: AnswerState;
}

export default function Answer({
  answer,
  onAnswerPressed,
  answerNumber,
  answerState,
}: IAnswer) {
  return (
    <MyButton
      answerState={answerState}
      title={answer}
      onpressed={() => {
        onAnswerPressed(answerNumber);
      }}
    />
  );
}
