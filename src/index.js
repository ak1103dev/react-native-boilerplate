import React, { Component } from 'react';
import {
  Navigator
  // Text,
  // TouchableHighlight
} from 'react-native';

import { Provider } from 'react-redux';
import createStore from './redux/createStore';

// import { Page, Home } from './containers';
import { App } from './containers';
// import { NavBar } from './components';

const store = createStore();

export default class Main extends Component {
  renderScene(route, navigator) {
    // switch (route.id) {
    //   case 'app':
    //     return <Page title={route.title} navigator={navigator}/>;
    //   case 'home':
    //     return <Home title={route.title} navigator={navigator}/>;
    //   default:
    //     return;
    // }
    return <App title={route.title} navigator={navigator}/>;
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ id: 'app', title: 'My Initial Scene', index: 0 }}
          renderScene={this.renderScene.bind(this)}
          // navigationBar={
          //   <Navigator.NavigationBar
          //     routeMapper={{
          //       LeftButton: (route, navigator, index, navState) => {
          //         if (index > 0) {
          //           return (
          //             <TouchableHighlight
          //               underlayColor="transparent"
          //               onPress={() => { if (index > 0) { navigator.pop(); } }}>
          //               <Text>Back</Text>
          //             </TouchableHighlight>);
          //         } else { return null; }
          //       },
          //       RightButton: (route, navigator, index, navState) => <Text>Done</Text>,
          //       Title: (route, navigator, index, navState) => <Text>Awesome Nav Bar</Text>
          //     }}
          //     style={{backgroundColor: 'gray'}} /> }
        />
      </Provider>
    );
  }
}
