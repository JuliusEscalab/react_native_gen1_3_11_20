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
    this.setState({movies: filteredMovies, modalActive: false});
  };

  clearFilters = () => {
    const {movies} = this.props;
    this.setState({movies, modalActive: false});
  };

  toggleModal = () =>
    this.setState(({modalActive}) => ({modalActive: !modalActive}));

  render() {
    const {modalActive, movies, moviesGenres} = this.state;
    return (
      <>
        <FlatList
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
            <TouchableOpacity
              onPress={this.toggleModal}
              style={{
                padding: 10,
                backgroundColor: '#e74c3c',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{color: 'white'}}>Cerrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.clearFilters}
              style={{
                padding: 10,
                backgroundColor: '#e74c3c',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={{color: 'white'}}>Limpiar Filtro</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      </>
    );
  }
}
