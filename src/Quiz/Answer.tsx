import React, {useState} from 'react';
import MyButton from './MyButton';
import {AnswerState} from './Quiz';
import {ColorValue} from 'react-native/types';

interface IAnswer {
  answer: string;
  onAnswerPressed: (answerNumber: number) => void;
  answerNumber: number;
  answerState: AnswerState;
  isSelectedAnswer: boolean;
  correctAnswerNumber: number;
}

interface IColorValue {
  color: ColorValue;
  underlayColor: ColorValue;
}

export default function Answer({
  answer,
  onAnswerPressed,
  answerNumber,
  answerState,
  isSelectedAnswer,
  correctAnswerNumber,
}: IAnswer) {
  function getColor(): IColorValue {
    if (isSelectedAnswer && correctAnswerNumber === answerNumber) {
      return {
        color: '#07a176',
        underlayColor: '#15916e',
      };
    } else if (isSelectedAnswer && correctAnswerNumber !== answerNumber) {
      return {
        color: '#ad3d4a',
        underlayColor: '#833039',
      };
    } else {
      return {
        color: '#7f7880',
        underlayColor: '#91888a',
      };
    }
  }

  return (
    <MyButton
      color={getColor().color}
      underlayColor={getColor().underlayColor}
      answerState={answerState}
      title={answer}
      onpressed={() => {
        onAnswerPressed(answerNumber);
      }}
    />
  );
}
