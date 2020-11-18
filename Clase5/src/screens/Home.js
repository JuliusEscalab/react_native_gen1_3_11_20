// @flow
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Button} from 'react-native';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

export default class Home extends PureComponent {
  render() {
    const {movies} = this.props;
    return (
      <>
        <Header title="Cartelera" />
        <MovieList movies={movies} />
      </>
    );
  }
}

Home.propTypes = {
  movies: PropTypes.array,
};

Home.defaultProps = {
  movies: [],
};
