import React from 'react';
import MyButton from './MyButton';

interface IAnswer {
  answer: string;
  onAnswerPressed: (answerNumber: number) => void;
  answerNumber: number;
  selected: number;
}

export default function Answer({
  answer,
  onAnswerPressed,
  answerNumber,
  selected,
}: IAnswer) {
  return (
    <MyButton
      title={answer}
      onpressed={() => {
        onAnswerPressed(answerNumber);
      }}
    />
  );
}
