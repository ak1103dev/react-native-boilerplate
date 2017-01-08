import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
// import { connect } from 'react-redux';

// import * as actions from './actions';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

// export default connect(
//   (state) => ({
//     counters: state.app.counters
//   }),
//   (dispatch) => ({
//     addNewCounter: () => dispatch(actions.newCounter()),
//     increment: (id) => dispatch(actions.increment(id)),
//     decrement: (id) => dispatch(actions.decrement(id)),
//     incrementWithDelay: (id) => dispatch(actions.incrementWithDelay(id))
//   })
// )(App);
