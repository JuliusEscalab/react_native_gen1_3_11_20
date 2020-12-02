import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Item from './Item';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#7f8c8d',
    padding: 20,
    borderRadius: 20,
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
  radiobutton: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  radiobuttonNotSelected: {
    width: 13,
    height: 13,
    borderRadius: 50,
  },
  radiobuttonSelected: {
    backgroundColor: '#e74c3c',
  },
});

// Transformar este componente desde el de la Clase 4

const RadioButton = ({title, selected, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.radioButtonTitle}>{title}</Text>
      <Item name="No" value={0} selected={selected} onPress={onChange} />
      <Item name="Si" value={1} selected={selected} onPress={onChange} />
    </View>
  );
};

export default RadioButton;
