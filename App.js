/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
import {AlertIOS} from 'react-native';
import styles from "./styles";

const QUESTIONS = [
  {question: 'Sample Question Text 1', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'], key: 1},
  {question: 'Sample Question Text 2', answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'], key: 2},
];


export default class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      answerBox1: false,
      answerBox2: false,
      answerBox3: false,
      answerBox4: false,
      questionIndex: 1,
    };
  }

  _MoveOn(response) {
    if (response=='correct') {

    }
    else {

    }
  }

  checkAnswer(ans) {
    //sets value of key to the index of correct answer for current question
    var key = QUESTIONS[this.state.questionIndex].key;
    //user enters the right answer
    if (ans == key) {
      AlertIOS.alert(
        'Correct!',
        'Answer ' + key,
        [{text: 'Move On', onPress: () => this._MoveOn('correct'), style: 'default'}]
      );
    }
    //user enters incorrect answer
    else {
      AlertIOS.alert(
        'Incorrect',
        'Correct answer was: \nAnswer ' + key,
        [{text: 'Move On', onPress: () => this._MoveOn('incorrect'), style: 'default'}]
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

          <Button block light onPress={() => this.checkAnswer(1)}>
            <Text>{QUESTIONS[this.state.questionIndex].answers[0]}</Text>
          </Button>

            <Button onPress={() => this.checkAnswer(2)}><Text>{QUESTIONS[this.state.questionIndex].answers[1]}</Text></Button>

          <Button onPress={() => this.checkAnswer(3)}>
            <Text>{QUESTIONS[this.state.questionIndex].answers[2]}</Text>
          </Button>

          <Button onPress={() => this.checkAnswer(4)}>
            <Text>{QUESTIONS[this.state.questionIndex].answers[2]}</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button>
              <Text>Button 1</Text>
            </Button>
            <Button>
              <Text>Button 2</Text>
            </Button>
            <Button>
              <Text>Button 3</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
