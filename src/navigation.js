import React, { Component, PropTypes } from 'react';
import {
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';

import { App } from './containers';

import { connect } from 'react-redux';
// import { routing } from './redux/modules';

class Navigation extends Component {
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
      <Navigator
        initialRoute={{ id: 'app', title: this.props.route.name, index: 0 }}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (index > 0) {
                  return (
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={() => { if (index > 0) { navigator.pop(); } }}>
                      <Text>Back</Text>
                    </TouchableHighlight>);
                } else { return null; }
              },
              RightButton: (route, navigator, index, navState) => <Text>Done</Text>,
              Title: (route, navigator, index, navState) => <Text>{this.props.route.name}</Text>
            }}
            style={{backgroundColor: 'gray'}}
          />
        }
      />
    );
  }
}

Navigation.propTypes = {
  route: PropTypes.object
};

export default connect(
  (state) => ({
    route: state.routing.route
  }),
  (dispatch) => ({})
)(Navigation);
