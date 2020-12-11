import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  box: {
    margin: 5,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    justifyContent: 'center',
  },
  totalText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const Box = ({variableData, variableName, color}) => (
  <View style={styles.box}>
    <Text style={[styles.totalText, {color}]}>{variableData}</Text>
    <Text style={[styles.totalText, {color}]}>{variableName}</Text>
  </View>
);

export default Box;
