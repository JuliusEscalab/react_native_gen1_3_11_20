/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import RootNavigation from './routes/RootNavigation';
import Home from './screen/Home';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    flex: 1,
  },
});

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigation />
    </>
  );
};

export default App;
