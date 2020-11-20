import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  toucheable: {
    padding: 5,
    backgroundColor: 'gray',
    margin: 5,
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
  },
});

const Chip = ({value, onPress}) => (
  <TouchableOpacity
    style={styles.toucheable}
    disabled={!onPress}
    onPress={() => onPress(value)}>
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
);

export default Chip;
