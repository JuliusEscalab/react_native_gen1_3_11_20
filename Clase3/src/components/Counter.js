import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  counterBox: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#e67e22',
  },
  counterButton: {
    padding: 20,
    borderRadius: 15,
  },
  buttonAdd: {
    backgroundColor: '#2ecc71',
  },
  buttonSubstract: {
    backgroundColor: '#e74c3c',
  },
  buttonReset: {
    backgroundColor: '#3498db',
  },
  buttonCounterText: {
    paddingHorizontal: 5,
    paddingVertical: 0,
  },
});

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 10,
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    const {counter} = state;

    console.log('getDerivedStateFromProps: ', state);

    if (counter <= 0) {
      return {
        message: 'Menor a cero!',
        counter: 0,
      };
    }
    return {
      message: 'Mayor a cero!',
      counter,
    };
  };

  shouldComponentUpdate = (_, nextState) => {
    const {counter} = this.state;

    if (counter <= 0) {
      return false;
    }

    return true;
  };

  add = () =>
    this.setState((states) => {
      return {
        counter: states.counter + 1,
      };
    });

  substract = () => this.setState(({counter}) => ({counter: counter - 1}));

  reset = () => this.setState({counter: 0});

  render() {
    const {counter} = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.counterBox]}>
          <Text style={styles.textDefault}>Contador</Text>
          <Text style={styles.textDefault}>{counter}</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={this.add}
            style={[styles.counterButton, styles.buttonAdd]}>
            <Text style={styles.buttonCounterText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.reset}
            style={[styles.counterButton, styles.buttonReset]}>
            <Text style={styles.buttonCounterText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.substract}
            style={[styles.counterButton, styles.buttonSubstract]}>
            <Text style={styles.buttonCounterText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
