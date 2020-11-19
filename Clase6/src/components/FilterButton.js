import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#f1c40f',
  },
});

export default class FilterButton extends Component {
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} styles={styles.container}>
        <Icon name="filter" color="black" size={30} />
      </TouchableOpacity>
    );
  }
}
