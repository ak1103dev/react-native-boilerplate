import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux';
import { app } from '../../redux/modules';

export class Page extends Component {
  state = {
    message: 'Welcome to React Native!'
  }
  componentDidMount() {
    this.props.loadData();
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
        {
          this.props.data.map((datum) => {
            return (
              <Text key={datum} style={styles.instructions}>
                {datum}
              </Text>
            );
          })
        }
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

Page.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  hello: PropTypes.func,
  hi: PropTypes.func,
  loadData: PropTypes.func,
  navigator: PropTypes.object,
  data: PropTypes.array
};

export default connect(
  (state) => ({
    message: state.app.message,
    data: state.app.data
  }),
  (dispatch) => ({
    hi: () => dispatch(app.actions.hi()),
    hello: () => dispatch(app.actions.hello()),
    loadData: () => dispatch(app.actions.loadData())
  })
)(Page);
