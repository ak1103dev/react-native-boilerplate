import React, { Component } from 'react';

import { Provider } from 'react-redux';
import createStore from './redux/createStore';

import Navigation from './navigation';

const store = createStore();

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
