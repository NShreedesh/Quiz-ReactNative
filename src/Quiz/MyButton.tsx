import {View, Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import React from 'react';

interface IButton {
  title: string;
  onpressed?: () => void;
  flex?: number;
}

enum AnswerState {
  none,
  correct,
  wrong,
}

export default function Button({title, onpressed, flex}: IButton) {
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
      style={{...style.button, flex: flex}}
      underlayColor={'#59489b'}
      onPress={onpressed}>
      <View style={style.answerInnerView}>
        <Text style={style.titleText}>{title}</Text>
        <Image
          style={{
            height: 20,
            width: 20,
          }}
          source={getIcon(AnswerState.none)}
        />
      </View>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  button: {
    paddingVertical: 22,
    backgroundColor: '#8B80B6',
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
