import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#7f8c8d',
    padding: 20,
    borderRadius: 15,
  },
  radioButtonTitle: {
    fontSize: 20,
    color: '#ecf0f1',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButtonNotSelected: {
    width: 13,
    height: 13,
    borderRadius: 50,
  },
  radioButtonSelected: {
    backgroundColor: '#e74c3c',
  },
});

export default class RadioButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  select = (index) => this.setState({selected: index});

  render() {
    const {selected} = this.state;
    console.log('selected: ', selected);
    return (
      <View style={styles.container}>
        <Text style={styles.radioButtonTitle}>RadioButton</Text>
        <TouchableOpacity onPress={() => this.select(0)} style={styles.item}>
          <Text>Item 1</Text>
          <View style={styles.radioButton}>
            <View
              style={[
                styles.radioButtonNotSelected,
                selected === 0 && styles.radioButtonSelected,
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.select(1)} style={styles.item}>
          <Text>Item 2</Text>
          <View style={styles.radioButton}>
            <View
              style={[
                styles.radioButtonNotSelected,
                selected === 1 && styles.radioButtonSelected,
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
