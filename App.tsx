import {SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import Quiz from './src/Quiz/Quiz';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Quiz />
      </SafeAreaView>
    );
  }
}
