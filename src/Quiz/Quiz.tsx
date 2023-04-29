import {Alert, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Answer from './Answer';
import Question from './Question';
import {quizData} from '../Data/QuizData';
import MyButton from './MyButton';

interface IAnswers {
  questionNumber: number;
  selectedAnswer: number;
}

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
  const [selectedAnswers, setSelectedAnswers] = useState<IAnswers[]>([]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);

  useEffect(() => {
    setIsAnswerSelected(doesAnswerAlreadyExist());
  }, [questionCount]);

  function onAnswerPresssed(answerNumber: number) {
    if (doesAnswerAlreadyExist()) return;

    setSelectedAnswers(prev => {
      return [
        ...prev,
        {
          selectedAnswer: answerNumber,
          questionNumber: questionCount,
        },
      ];
    });
    setIsAnswerSelected(true);

    if (answerNumber === quizData[questionCount].correctAnswer) {
      setCorrectAnswerCount(prev => prev + 1);
    } else {
      console.log('Wrong Anwser');
    }
  }

  function doesAnswerAlreadyExist() {
    console.log(questionCount);

    const answer = selectedAnswers.find(
      answer => questionCount == answer.questionNumber,
    );
    if (answer) return true;
    else return false;
  }

  console.log(selectedAnswers);

  function getAnswerState(isCorrectAnswer: boolean): AnswerState {
    return isCorrectAnswer ? AnswerState.correct : AnswerState.wrong;
  }

  function changeQuestionCount(state: QuestionCountChangeState) {
    switch (state) {
      case QuestionCountChangeState.Decrement:
        setQuestionCount(prev => {
          if (prev > 0) {
            return prev - 1;
          }
          return prev;
        });
        break;
      case QuestionCountChangeState.Increment:
        setQuestionCount(prev => {
          if (prev < quizData.length - 1) {
            return prev + 1;
          }
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
          title={selectedAnswers.length === quizData.length ? 'Finish' : 'Next'}
          onpressed={() => {
            if (!isAnswerSelected) {
              ToastAndroid.show('select your answer.', ToastAndroid.SHORT);
              return;
            }
            changeQuestionCount(QuestionCountChangeState.Increment);

            if (selectedAnswers.length === quizData.length) {
              ToastAndroid.show(
                `Score: ${correctAnswerCount.toString()}`,
                ToastAndroid.LONG,
              );
            }
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
