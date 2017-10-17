/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import PropTypes from 'prop-types';
 import React, { Component } from 'react';
 import { NavigatorIOS, Text } from 'react-native';
 import questionScene from "./questionScene";
 import answerScene from "./questionScene"; 

 export default class App extends Component {  
   render() {
     return (
       <NavigatorIOS
         initialRoute={{
           component: questionScene,
           title: 'Question',
         }}
         style={{flex: 1}}
       />
     );
   }
 }
