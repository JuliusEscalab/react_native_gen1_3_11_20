import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  text: {
    color: colors.black,
  },
});

const defaultIcon = <Text>+</Text>;

const Button = ({onPress, text, icon = defaultIcon}) => (
  <TouchableHighlight
    style={styles.container}
    onPress={onPress}
    underlayColor={colors.green}>
    <>
      <Text style={styles.text}>{text}</Text>
      {icon}
    </>
  </TouchableHighlight>
);

export default Button;
