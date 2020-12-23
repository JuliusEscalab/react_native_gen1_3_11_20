import React from 'react';
import {Text, View, TextInput as TextInputRN, StyleSheet} from 'react-native';
import colors from '../../config/colors';
import {useTheme} from '../../context/Theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    padding: 5,
  },
  label: {
    fontSize: 20,
    color: colors.black,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: colors.white,
    borderRadius: 7,
  },
  textInput: {
    padding: 10,
    color: colors.black,
  },
});

const TextInput = ({
  value,
  placeholder,
  type = 'default',
  labelTag,
  onChange = () => {},
}) => {
  const {
    mainTheme: {textColor},
  } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.label, {color: textColor}]}>{labelTag}</Text>
      <View style={styles.inputContainer}>
        <TextInputRN
          testID="TextInput"
          value={value}
          style={styles.textInput}
          placeholder={placeholder}
          keyboardType={type}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
};

export default TextInput;
