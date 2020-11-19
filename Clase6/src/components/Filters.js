import React, {Component} from 'react';
import {View} from 'react-native';
import Chip from './Chip';

export default class Filters extends Component {
  render() {
    const {moviesGenres, movieGenreOnPress} = this.props;
    const genresChips = moviesGenres.map((genre, index) => (
      <Chip onPress={movieGenreOnPress} key={`${index}-genre`} value={genre} />
    ));
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {genresChips}
      </View>
    );
  }
}
