import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
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

const Item = ({name, value, selected, onPress}) => (
  <TouchableOpacity onPress={() => onPress(value)} style={styles.item}>
    <Text>{name}</Text>
    <View style={styles.radiobutton}>
      <View
        style={[
          styles.radiobuttonNotSelected,
          selected === value && styles.radiobuttonSelected,
        ]}
      />
    </View>
  </TouchableOpacity>
);

export default Item;
