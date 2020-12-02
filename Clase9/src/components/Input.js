import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderColor: colors.gray,
  },
});

const Input = ({
  value,
  placeholder,
  onChangeText,
  autoCorrect,
  autoCapitalize,
  email,
}) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      autoCorrect={autoCorrect}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      keyboardType={email ? 'email-address' : 'default'}
    />
  </View>
);

export default Input;
