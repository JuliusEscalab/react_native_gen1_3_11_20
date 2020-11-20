// @flow
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

const Home = ({movies}) => (
  <>
    <Header title="Cartelera" />
    <MovieList movies={movies} />
  </>
);

export default Home;

Home.propTypes = {
  movies: PropTypes.array,
};

Home.defaultProps = {
  movies: [],
};
