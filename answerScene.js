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

    _onForward = () => {
      this.props.navigator.push({
        title: 'Scene ' + nextIndex,
      });
    }

    render() {
      return(
        <Text> TEST </Text>
      );
    }
  }

  export default answerScene;
