import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux';
import { app } from '../../redux/modules';

export class More extends Component {
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
          {this.props.message}
        </Text>
        <Text style={styles.instructions}>
          {this.props.title}
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

More.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  hello: PropTypes.func,
  hi: PropTypes.func,
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
)(More);
