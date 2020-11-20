import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Chip from './Chip';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
});

const Filters = ({moviesGenres, movieGenreOnPress}) => {
  const genresChips = moviesGenres.map((genre, index) => (
    <Chip onPress={movieGenreOnPress} key={`${index}-genre`} value={genre} />
  ));

  return <View style={styles.container}>{genresChips}</View>;
};

export default Filters;
