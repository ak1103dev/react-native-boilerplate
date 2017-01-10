import React, { Component } from 'react';
import {
  Navigator,
  Text
} from 'react-native';

import { Provider } from 'react-redux';
import createStore from './redux/createStore';

import { App, Home } from './containers';

const store = createStore();

export default class Main extends Component {
  renderScene(route, navigator) {
    switch (route.id) {
      case 'app':
        return <App title={route.title} navigator={navigator}/>;
      case 'home':
        return <Home title={route.title} navigator={navigator}/>;
      default:
        return;
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ id: 'app', title: 'My Initial Scene', index: 0 }}
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) => <Text>Cancel</Text>,
                RightButton: (route, navigator, index, navState) => <Text>Done</Text>,
                Title: (route, navigator, index, navState) => <Text>Awesome Nav Bar</Text>
              }}
              style={{backgroundColor: 'gray'}} /> }
        />
      </Provider>
    );
  }
}
