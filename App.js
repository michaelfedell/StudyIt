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
} from "native-base";

 import AlertIOS from 'react-native';
 
 import styles from "./styles";
 
 export default class App extends Component {  
   constructor(props) {
     super(props);
     this.state = {
       radio1: false,
       radio2: false,
       radio3: false,
       radio4: false,
       questionIndex: 0,
     };
   }
 
   checkAnswer(ans) {
     var key = 2
     if (ans == key) {
       AlertIOS.alert('Correct!');
     }
     else {
       AlertIOS.alert('Sorry, that is incorrect');
     }
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
             <Title>Question {this.state.questionIndex + 1}</Title>
           </Body>
         </Header>
 
         <Content>
           <Text style={styles.question}>Question Content Here</Text>
           
           <ListItem
             selected={this.state.radio1}
             onPress={() => this.toggleRadio1()}
             onPress={() => this.checkAnswer(2)}
           >
             <Text>Answer 1</Text>
             <Right>
               <Button />
             </Right>
           </ListItem>
 
           <ListItem
             selected={this.state.radio2}
             onPress={() => this.toggleRadio2()}
             onPress={() => AlertIOS.alert('Test')}
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
