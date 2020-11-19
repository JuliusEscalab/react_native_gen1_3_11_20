import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default class Chip extends Component {
  render() {
    const {value, onPress} = this.props;
    return (
      <TouchableOpacity
        style={{
          padding: 5,
          backgroundColor: 'gray',
          margin: 5,
          alignSelf: 'center',
          borderRadius: 10,
        }}
        disabled={!onPress}
        onPress={() => onPress(value)}>
        <Text style={{color: 'white'}}>{value}</Text>
      </TouchableOpacity>
    );
  }
}
