import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { App, Search } from './containers';

import { connect } from 'react-redux';
// import { routing } from './redux/modules';

class Navigation extends Component {
  renderButton(name, navigator) {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="transparent"
        onPress={() => navigator.push({ id: name, title: name, index: 1 })}
      >
        <Icon
          name={name}
          size={30}
          color="white"
        />
      </TouchableHighlight>
    );
  }
  renderScene(route, navigator) {
    switch (route.id) {
      case 'search':
        return <Search title={route.title} navigator={navigator}/>;
      default:
        return <App title={route.title} navigator={navigator}/>;
    }
  }
  renderLeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.backButton}
          onPress={() => {
            if (index > 0) navigator.pop();
          }}
        >
          <Icon
            name="chevron-left"
            size={30}
            color="white"
          />
        </TouchableHighlight>);
    } else { return null; }
  }
  renderRightButton(route, navigator, index, navState) {
    return (
      <View style={styles.buttonGroup}>
        {this.renderButton('search', navigator)}
        {this.renderButton('ellipsis-v', navigator)}
      </View>
    );
  }
  renderTitle(route, navigator, index, navState) {
    return (
      <Text style={styles.title}>{this.props.route.name}</Text>
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'app', title: this.props.route.name, index: 0 }}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: this.renderLeftButton.bind(this),
              RightButton: this.renderRightButton.bind(this),
              Title: this.renderTitle.bind(this)
            }}
            style={styles.navigationBar}
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

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: 'gray'
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 5
  },
  button: {
    width: 30,
    height: 30,
    alignItems: 'center'
  },
  backButton: {
    top: 10
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    top: 10
  }
});
