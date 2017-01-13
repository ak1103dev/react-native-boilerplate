import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { App, Search, More } from './containers';

import { connect } from 'react-redux';
import { routing } from './redux/modules';

class Navigation extends Component {
  renderButton(id, title, iconName, navigator) {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="transparent"
        onPress={() => {
          if (id !== this.props.route.id) {
            navigator.push({ id, title, index: 1 });
            this.props.changeRoute({ id, title, index: 1 });
          }
        }}
      >
        <Icon
          name={iconName}
          size={30}
          color="white"
        />
      </TouchableHighlight>
    );
  }
  renderScene(route, navigator) {
    switch (route.id) {
      case 'search':
        return <Search navigator={navigator}/>;
      case 'more':
        return <More navigator={navigator}/>;
      default:
        return <App navigator={navigator}/>;
    }
  }
  renderLeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.backButton}
          onPress={() => {
            if (index > 0) {
              navigator.popToTop();
              this.props.changeRoute({ id: 'app', title: 'Home', index: 0 });
            }
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
        {this.renderButton('search', 'Search', 'search', navigator)}
        {this.renderButton('more', 'More', 'ellipsis-v', navigator)}
      </View>
    );
  }
  renderTitle(route, navigator, index, navState) {
    return (
      <Text style={styles.title}>{this.props.route.title}</Text>
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
  route: PropTypes.object,
  changeRoute: PropTypes.func
};

export default connect(
  (state) => ({
    route: state.routing
  }),
  (dispatch) => ({
    changeRoute: (route) => dispatch(routing.actions.changeRoute(route))
  })
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
