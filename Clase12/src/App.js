/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './routes/RootNavigation';
import {Provider} from 'react-redux';
import store from './redux/store';
import Theme from './context/Theme';
import CountryHandler from './context/CountryHandler';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Theme>
        <CountryHandler>
          <RootNavigation />
        </CountryHandler>
      </Theme>
    </Provider>
  );
};

export default App;
