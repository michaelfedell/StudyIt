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
import answerScene from './answerScene'

class questionScene extends Component {
  static propTypes = {
      title: PropTypes.string.isRequired,
      navigator: PropTypes.object.isRequired,
    }

    _onForward = () => {
      const nextRoute = {
        component: answerScene,
        title: 'answer',
        passProps: { answer: 0 }
      };
      this.props.navigator.push(nextRoute);
    }

  constructor(props) {
    super(props);
    this.state = {
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true
    };
  }

  toggleRadio1() {
    this.setState({
      radio1: true,
      radio2: false,
      radio3: false,
      radio4: false
    });
  }

  toggleRadio2() {
    this.setState({
      radio1: false,
      radio2: true,
      radio3: false,
      radio4: false
    });
  }

  toggleRadio3() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: true,
      radio4: false
    });
  }

  toggleRadio4() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Button</Title>
          </Body>
        </Header>

        <Content>
          <Text style={styles.question}>Question Content Here</Text>
          <ListItem
            selected={this.state.radio1}
            onPress={() => this._onForward()}
          >
            <Text>Answer 1</Text>
            <Right>
              <Button />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio2}
            onPress={() => this.toggleRadio2()}
          >
            <Text>Answer 2</Text>
            <Right>
              <Button />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio3}
            onPress={() => this.toggleRadio3()}
          >
            <Text>Answer 3</Text>
            <Right>
              <Button />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio4}
            onPress={() => this.toggleRadio4()}
          >
            <Text>Answer 4</Text>
            <Right>
              <Button />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default questionScene;
