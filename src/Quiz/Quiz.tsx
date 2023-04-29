import {Alert, Modal, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import Answer from './Answer';
import Question from './Question';
import {quizData} from '../Data/QuizData';
import MyButton from './MyButton';

enum QuestionCountChangeState {
  Increment,
  Decrement,
}

export enum AnswerState {
  none,
  correct,
  wrong,
}

export default function Quiz() {
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState<boolean>(false);

  function onAnswerPresssed(answerNumber: number) {
    if (answerNumber === quizData[questionCount].correctAnswer) {
      console.log('Correct Answer');
    } else {
      console.log('Wrong Anwser');
    }
    setIsAnswerSelected(true);
  }

  function getAnswerState(isCorrectAnswer: boolean): AnswerState {
    return isCorrectAnswer ? AnswerState.correct : AnswerState.wrong;
  }

  function changeQuestionCount(state: QuestionCountChangeState) {
    switch (state) {
      case QuestionCountChangeState.Decrement:
        setQuestionCount(prev => {
          if (prev > 0) return prev - 1;
          return prev;
        });
        break;
      case QuestionCountChangeState.Increment:
        setQuestionCount(prev => {
          if (prev < quizData.length - 1) return prev + 1;
          return prev;
        });
        break;
    }
  }

  return (
    <View style={style.mainView}>
      <View>
        <Text style={style.questionnumber}>{`Question ${questionCount + 1}/${
          quizData.length
        }`}</Text>
        <Question question={quizData[questionCount].question} />
      </View>

      <View style={style.answers}>
        {quizData[questionCount].answers.map((answer, index) => {
          return (
            <Answer
              key={index}
              answer={answer}
              onAnswerPressed={onAnswerPresssed}
              answerNumber={index}
              answerState={
                isAnswerSelected
                  ? getAnswerState(
                      index === quizData[questionCount].correctAnswer,
                    )
                  : AnswerState.none
              }
            />
          );
        })}
      </View>
      <View style={style.bottomButtons}>
        <MyButton
          title="Previous"
          onpressed={() => {
            changeQuestionCount(QuestionCountChangeState.Decrement);
          }}
          flex={1}
        />
        <MyButton
          title="Next"
          onpressed={() => {
            if (!isAnswerSelected) {
              ToastAndroid.show('select your answer.', ToastAndroid.SHORT);
              return;
            }
            changeQuestionCount(QuestionCountChangeState.Increment);
            setIsAnswerSelected(false);
          }}
          flex={1}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  mainView: {
    paddingHorizontal: 20,
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  questionnumber: {
    color: '#ff9c10',
    fontSize: 16,
  },
  quiz: {
    display: 'flex',
    gap: 20,
  },
  answers: {
    display: 'flex',
    gap: 15,
  },
  bottomButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
