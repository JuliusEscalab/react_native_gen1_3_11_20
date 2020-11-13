import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2980b9',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default class dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  toggle = () => this.setState(({open}) => ({open: !open}));

  render() {
    const {children} = this.props;
    const {open} = this.state;

    const dropdownChildren = open && children;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.toggle()}>
          <View style={styles.dropdown}>
            <Text style={styles.title}>Dropdown</Text>
            <Text style={styles.title}>+</Text>
          </View>
        </TouchableOpacity>
        {dropdownChildren}
      </View>
    );
  }
}
