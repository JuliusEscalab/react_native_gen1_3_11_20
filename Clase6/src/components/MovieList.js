import React, {PureComponent} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import FilterButton from './FilterButton';
import FilterButtons from './FilterButtons';
import Filters from './Filters';
import MovieCard from './MovieCard';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  filterButton: {
    position: 'absolute',
    top: '90%',
    left: '80%',
    backgroundColor: '#f1c40f',
    borderRadius: 30,
    padding: 10,
  },
});

export default class MovieList extends PureComponent {
  flatlistRef = null;

  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies,
      modalActive: false,
    };
  }

  componentDidMount = () => {
    this.setGenresData();
  };

  setGenresData = () => {
    const {movies} = this.state;
    const arrayData = movies.reduce((genresTypes, movie) => {
      return [...genresTypes, ...movie.genres];
    }, []);

    const genresSet = new Set(arrayData);
    this.setState({moviesGenres: [...genresSet]});
  };

  applyFilter = (genre) => {
    const {movies} = this.props;
    const filteredMovies = movies.filter((movie) =>
      movie.genres.includes(genre),
    );
    this.setState(
      {movies: filteredMovies, modalActive: false},
      this.movieListScrollToTop,
    );
  };

  movieListScrollToTop = () =>
    this.flatlistRef.scrollToOffset({animated: true, offset: 0});

  clearFilters = () => {
    const {movies} = this.props;
    this.setState({movies, modalActive: false}, this.movieListScrollToTop);
  };

  toggleModal = () =>
    this.setState(({modalActive}) => ({modalActive: !modalActive}));

  render() {
    const {modalActive, movies, moviesGenres} = this.state;
    return (
      <>
        <FlatList
          ref={(movieListFlatlistRef) =>
            (this.flatlistRef = movieListFlatlistRef)
          }
          style={styles.container}
          data={movies}
          keyExtractor={({poster}) => poster}
          showsVerticalScrollIndicator={false}
          renderItem={({item: {posterurl, title, year, imdbRating}}) => (
            <MovieCard
              posterurl={posterurl}
              title={title}
              year={year}
              imdbRating={imdbRating}
            />
          )}
        />
        <View style={styles.filterButton}>
          <FilterButton onPress={this.toggleModal} />
        </View>
        <Modal visible={modalActive} animationType="slide">
          <SafeAreaView>
            <Filters
              movieGenreOnPress={this.applyFilter}
              moviesGenres={moviesGenres}
            />
            <FilterButtons
              clearFilters={this.clearFilters}
              toggleModal={this.toggleModal}
            />
          </SafeAreaView>
        </Modal>
      </>
    );
  }
}
