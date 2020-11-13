import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import HorizontalScroll from '../HorizontalScroll';
import {baseUri, dishData, dishTitles} from '../../rawData';
import DishCard from './DishCard';

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 10,
    width: '100%',
  },
  horizontalScroll: {margin: 10},
});

export default class DishList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: dishData,
      selectedDishes: [],
    };
  }

  selectDishes = (name) => {
    const {dishes} = this.state;

    const filteredDishes = dishes.filter((dish) => dish.cuisine === name);

    this.setState({selectedDishes: filteredDishes});
  };

  render() {
    const {selectedDishes} = this.state;
    return (
      <>
        <HorizontalScroll
          style={styles.horizontalScroll}
          onPress={this.selectDishes}
        />
        <FlatList
          style={styles.flatListContainer}
          data={selectedDishes}
          keyExtractor={({id}) => id.toString()}
          renderItem={({
            item: {title, readyInMinutes, servings, image, sourceUrl},
          }) => (
            <DishCard
              title={title}
              readyInMinutes={readyInMinutes}
              servings={servings}
              image={image}
              sourceUrl={sourceUrl}
            />
          )}
          ListEmptyComponent={() => (
            <View>
              <Text>No hay items</Text>
            </View>
          )}
        />
      </>
    );
  }
}
