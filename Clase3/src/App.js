/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Counter from './components/Counter';
import InputList from './components/InputList';
import RadioButton from './components/RadioButton';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Counter />
          <InputList />
          <RadioButton />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
