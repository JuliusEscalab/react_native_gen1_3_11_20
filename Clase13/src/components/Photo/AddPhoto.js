import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableHighlight, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  circleContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoContainer: {
    borderColor: colors.black,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFrame: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  textStyle: {
    paddingTop: 15,
    color: colors.black,
  },
});

const AddPhoto = ({uri = null}) => {
  const navigation = useNavigation();

  const ImagePhoto = !uri ? (
    <View style={[styles.addPhotoContainer, styles.imageFrame]}>
      <Icon name="image-plus" color={colors.black} size={30} />
      <Text style={styles.textStyle}>Agregar Foto</Text>
    </View>
  ) : (
    <Image style={styles.imageFrame} source={{uri}} />
  );

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate('Camera')}
        underlayColor={colors.gray}
        style={styles.circleContainer}>
        {ImagePhoto}
      </TouchableHighlight>
    </View>
  );
};

export default AddPhoto;
