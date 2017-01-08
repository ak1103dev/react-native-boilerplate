import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
// import { connect } from 'react-redux';

// import * as actions from './actions';

export default class App extends Component {
  state = {
    message: 'Welcome to React Native!'
  }

  onClick = () => {
    this.setState({
      message: 'Hello World!'
    });
  }
  onClick2 = () => {
    this.setState({
      message: 'Hi John!'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.message}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button onPress={this.onClick}
          title="Learn More" color="#841584"
          accessibilityLabel="Learn more about this purple button" />
        <Button onPress={this.onClick2}
          title="Learn More" color="#123456"
          accessibilityLabel="Learn more about this purple button" />
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
