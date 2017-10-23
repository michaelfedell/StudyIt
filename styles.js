const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },

  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },

  question: {
    borderBottomColor: 'black',
    marginTop: 10,
    marginBottom: 10,
  },

  questionText: {
    padding: 0,
    margin: 0,
    color: 'navy',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontSize: 20,
    fontStyle: 'italic'
  },
  answers: {
    flex: 1,
  },
  
  finish: {
    marginBottom: 5,
  },

  ab: {
    marginBottom: 10,
    flex: 1,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 5,
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20,
    height: 100
  }

};
