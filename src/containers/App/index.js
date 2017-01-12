import React, { Component, PropTypes } from 'react';
import {
  // StyleSheet
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { Home, Page } from '../index';
import FacebookTabBar from './FacebookTabBar';

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
      <ScrollableTabView
        renderTabBar={() => <FacebookTabBar />}
      >
        <Page tabLabel="bell"/>
        <Home tabLabel="home"/>
      </ScrollableTabView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   }
// });

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
