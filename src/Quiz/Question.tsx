import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface IQuestion {
  question: string;
}

export default function Question({question}: IQuestion) {
  return (
    <View>
      <Text style={style.question}>{question}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  question: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
});
