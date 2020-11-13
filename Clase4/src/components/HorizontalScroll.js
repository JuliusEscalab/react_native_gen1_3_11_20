import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {dishTitles} from '../rawData';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'green',
  },
  buttons: {
    padding: 5,
  },
  buttonText: {
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
});

export default class HorizontalScroll extends Component {
  render() {
    const {style, item, onPress} = this.props;

    return (
      <View style={StyleSheet.flatten([styles.container, style])}>
        <FlatList
          data={item || dishTitles}
          keyExtractor={({id}) => id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item: {id, name}}) => (
            <TouchableOpacity
              onPress={() => onPress(name)}
              style={styles.buttons}>
              <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

HorizontalScroll.propTypes = {
  style: PropTypes.shape({}),
  items: PropTypes.array,
  onPress: PropTypes.func,
};

HorizontalScroll.defaultProps = {
  style: {},
  items: [],
  onPress: () => {},
};
