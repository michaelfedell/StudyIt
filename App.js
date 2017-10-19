/**
 * 
 * 
 */

import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Footer,
  FooterTab,
  View,
} from "native-base";
import { AlertIOS, ProgressViewIOS } from 'react-native';
import styles from "./styles";
import Papa from 'papaparse';
//import testData from './testData.csv';

const QUESTIONS = [
  {question: 'Sample Question Text 1', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], ansKey: 1},
  {question: 'Sample Question Text 2', answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'], ansKey: 2},
  {question: 'Sample Question Text 3', answers: ['ANSWER 1', 'ANSWER 2', 'ANSWER 3', 'ANSWER 4'], ansKey: 3},
];

//const file = require('./testData');

//const parseLine = Papa.parse(file);
const parseLine = Papa.parse('test,TEST');

let numRight = 0;

export default class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      answerBox1: false,
      answerBox2: false,
      answerBox3: false,
      answerBox4: false,
      questionIndex: 0,
    };
  }

  _reset() {
    this.setState(previousState => {
      return { questionIndex: 0 }
    });
    numRight = 0;
  }

  _MoveOn() {
    // Need to add check for hasNextQuestion
    if (QUESTIONS[this.state.questionIndex + 1] != undefined) {
        this.setState(previousState => {
          return { questionIndex: previousState.questionIndex + 1 }
        });
    }

    // No questions remain
    else {
      AlertIOS.alert(
        'All Done!',
        'You answered ' + numRight + ' / ' + QUESTIONS.length + ' questions correctly.\nScore is ' + (numRight/QUESTIONS.length*100) + '%',
        [{text: 'Start Over', onPress: () => this._reset(), style: 'default'}]
      );
    }
  }

  checkAnswer(ans) {
    //sets value of key to the index of correct answer for current question
    var ansKey = QUESTIONS[this.state.questionIndex].ansKey;
    //user enters the right answer
    if (ans == ansKey) {
      AlertIOS.alert(
        'Correct!',
        'Answer ' + ansKey,
        [{text: 'Move On', onPress: () => this._MoveOn(), style: 'default'}]
      );
      numRight += 1;
    }
    //user enters incorrect answer
    else {
      AlertIOS.alert(
        'Incorrect',
        'Correct answer is: \nAnswer ' + ansKey,
        [{text: 'Move On', onPress: () => this._MoveOn(),style: 'default'}]
      );
    }
  }


  toggleAnswerBox1() {
    this.setState({
      answerBox1: true,
      answerBox2: false,
      answerBox3: false,
      answerBox4: false
    });
  }

  toggleAnswerBox2() {
    this.setState({
      answerBox1: false,
      answerBox2: true,
      answerBox3: false,
      answerBox4: false
    });
  }

  toggleAnswerBox3() {
    this.setState({
      answerBox1: false,
      answerBox2: false,
      answerBox3: true,
      answerBox4: false
    });
  }

  toggleAnswerBox4() {
    this.setState({
      answerBox1: false,
      answerBox2: false,
      answerBox3: false,
      answerBox4: true
    });
  }

  testParse() {
    AlertIOS.alert(
      'test?!',
      parseLine.data[0][1],
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Question {this.state.questionIndex + 1}</Title>
          </Body>
        </Header>

        <Content padder>
          <Text style={styles.question}>
            {QUESTIONS[this.state.questionIndex].question}
          </Text>
          
          <Button key='AB1' block light onPress={() => this.checkAnswer(1)}>
            <Text>{QUESTIONS[this.state.questionIndex].answers[0]}</Text>
          </Button>

          <Button key='AB2' block light onPress={() => this.checkAnswer(2)}>
            <Text>{QUESTIONS[this.state.questionIndex].answers[1]}</Text>
          </Button>

          <Button key='AB3' block light onPress={() => this.checkAnswer(3)}>
            <Text>{QUESTIONS[this.state.questionIndex].answers[2]}</Text>
          </Button>

          <Button key='AB4' block light onPress={() => this.checkAnswer(4)}>
            <Text>{QUESTIONS[this.state.questionIndex].answers[2]}</Text>
          </Button>

          <Button onPress={() => this.testParse()}>
            <Text>TEST PARSE</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
            <ProgressViewIOS progress={50} progressTintColor='red'>
            </ProgressViewIOS>
            <Text>Test</Text>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
