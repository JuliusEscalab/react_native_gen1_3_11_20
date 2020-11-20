import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const MovieFullScreenImage = ({posterurl, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{uri: posterurl}}
      />
    </TouchableOpacity>
  );
};

export default MovieFullScreenImage;
