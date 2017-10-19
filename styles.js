const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    backgroundColor: "#FFF",
    
  },

  contentWrapper: {
    flex: 1,
  },

  question: {
    padding: 0,
    margin: 0,
    color: 'blue',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },

  separator: {
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 5,
    justifyContent: 'space-between',    
  },

  finish: {
    flex: 1,
    alignItems: 'flex-end',    
  },

  ab: {
    marginBottom: 10,
  }

};
