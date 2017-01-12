import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { Home, Page } from '../index';

import { connect } from 'react-redux';
import { app } from '../../redux/modules';

export class App extends Component {
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
      <ScrollableTabView>
        <Page tabLabel="Page"/>
        <Home tabLabel="Home"/>
      </ScrollableTabView>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     {this.props.message}
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {this.props.title}
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      //   <Button onPress={this.props.hello}
      //     title="Learn More" color="#841584"
      //     accessibilityLabel="Learn more about this purple button" />
      //   <Button onPress={this.props.hi}
      //     title="Learn More" color="#123456"
      //     accessibilityLabel="Learn more about this purple button" />
      //   <Button onPress={() => this.props.navigator.push({ id: 'home', title: 'Home', index: 1 })}
      //     title="Home" color="#654321"
      //     accessibilityLabel="Learn more about this purple button" />
      // </View>
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

App.propTypes = {
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
)(App);
