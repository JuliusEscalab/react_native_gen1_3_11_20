/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    backgroundColor: 'gray',
    width: width * 0.2,
    height: 200,
  },
});

const App: () => React$Node = () => {
  const response = 'Wrong User';
  console.log('Dimensions: ', {height, width});

  return <Text>asd</Text>;
};

export default App;
