import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  filterButtonModal: {
    padding: 10,
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
  },
});

const FilterButtons = ({toggleModal, clearFilters}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={toggleModal} style={styles.filterButtonModal}>
      <Text style={styles.text}>Cerrar</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={clearFilters} style={styles.filterButtonModal}>
      <Text style={styles.text}>Limpiar Filtro</Text>
    </TouchableOpacity>
  </View>
);

export default FilterButtons;
