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

//Global variables to be used by the program
const data = require('./ch15data.json');
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
    if (data[this.state.questionIndex + 1] != undefined) {
        this.setState(previousState => {
          return { questionIndex: previousState.questionIndex + 1 }
        });
    }

    // No questions remain
    else {
      this.grade();
    }
  }

  grade() {
    AlertIOS.alert(
      'All Done!',
      'You answered ' + numRight + ' / ' + this.state.questionIndex + ' questions correctly.\nScore is ' + (numRight/this.state.questionIndex*100) + '%',
      [{text: 'Start Over', onPress: () => this._reset(), style: 'default'}]
    );
  }

  checkAnswer(ans) {
    //sets value of key to the index of correct answer for current question
    var ansKey = data[this.state.questionIndex].Key;
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
        [{text: 'Move On', onPress: () => this._MoveOn(), style: 'default'}]
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
      data[0].QNum,
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

        <Content padder style={styles.contentWrapper}>
          <Text style={styles.question}>
            {data[this.state.questionIndex].Question}
          </Text>

          <Button key='AB1' block light style={styles.ab} onPress={() => this.checkAnswer(1)}>
            <Text>{data[this.state.questionIndex].Answer_1}</Text>
          </Button>

          <Button key='AB2' block light style={styles.ab} 
          onPress={() => this.checkAnswer(2)}>
            <Text>{data[this.state.questionIndex].Answer_2}</Text>
          </Button>

          <Button key='AB3' block light style={styles.ab} 
          onPress={() => this.checkAnswer(3)}>
            <Text>{data[this.state.questionIndex].Answer_3}</Text>
          </Button>

          <Button key='AB4' block light style={styles.ab} 
          onPress={() => this.checkAnswer(4)}>
            <Text>{data[this.state.questionIndex].Answer_4}</Text>
          </Button>

          <View style={styles.finish}>
            <Button danger full 
            onPress={() => this.grade()}>
              <Text>Finish</Text>
            </Button>
          </View>
        </Content>

        <Footer>
          <FooterTab>
            <ProgressViewIOS progress={50} progressTintColor='red'>
            </ProgressViewIOS>
            <Text>ProgressTest</Text>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
