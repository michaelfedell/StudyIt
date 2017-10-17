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
  Body
} from "native-base";

import styles from "./styles";
import PropTypes from 'prop-types';

class answerScene extends Component {
  static propTypes = {
      title: PropTypes.string.isRequired,
      navigator: PropTypes.object.isRequired,
    }

    _onOK = () => {
      this.props.navigator.pop({
        passProps: {}
      });
    }

    checkAnswer() {
      if (this.props.ans == 0)
        return "Correct!";
      else return "Wrong";
    }

    render() {
      return (
        <Container style={styles.container}>
          <Header>
            <Title>AnswerScene</Title>
          </Header>
  
          <Content>
            <Text style={styles.answer}>Your answer was: {this.props.ans + 1}</Text>
            <Text>This is {this.checkAnswer()}</Text>
            <Button onPress={() => this._onOK()}>
              <Text>Ok</Text>
            </Button>
          </Content>
        </Container>
      );
    }
  }

  export default answerScene;
