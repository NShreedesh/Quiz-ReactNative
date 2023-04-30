import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  ColorValue,
} from 'react-native';
import React from 'react';
import {AnswerState} from './Quiz';

interface IButton {
  title: string;
  onpressed?: () => void;
  flex?: number;
  answerState?: AnswerState;
  color: ColorValue;
  underlayColor?: ColorValue;
}

export default function Button({
  title,
  onpressed,
  flex,
  answerState,
  color,
  underlayColor,
}: IButton) {
  function getIcon(state: AnswerState) {
    switch (state) {
      case AnswerState.correct:
        return require('../../public/images/correct.png');
      case AnswerState.wrong:
        return require('../../public/images/wrong.png');
    }
  }

  return (
    <TouchableHighlight
      style={{...style.button, flex: flex, backgroundColor: color}}
      underlayColor={underlayColor}
      onPress={onpressed}>
      <View style={style.answerInnerView}>
        <Text style={style.titleText}>{title}</Text>
        {answerState != AnswerState.none && answerState !== undefined && (
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={getIcon(answerState)}
          />
        )}
      </View>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  button: {
    paddingVertical: 22,
    borderRadius: 4,
  },
  titleText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    flex: 1,
  },
  answerInnerView: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
