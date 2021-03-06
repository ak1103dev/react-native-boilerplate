import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import { connect } from 'react-redux';
import { app } from '../../redux/modules';

class Home extends Component {
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
          {this.props.title}
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button onPress={() => this.props.navigator.replace({ id: 'app', title: 'Home', index: 1 })}
          title="App" color="#654321"
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

Home.propTypes = {
  title: PropTypes.string,
  navigator: PropTypes.object
};

export default connect(
  (state) => ({
    message: state.app.message
  }),
  (dispatch) => ({
    hi: () => dispatch(app.actions.hi()),
    hello: () => dispatch(app.actions.hello())
  })
)(Home);
