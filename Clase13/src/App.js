/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RootNavigation from './routes/RootNavigation';
import {Provider} from 'react-redux';
import store from './redux/store';
import Theme from './context/Theme';
import CountryHandler from './context/CountryHandler';
import UserHandler from './context/User';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Theme>
        <CountryHandler>
          <UserHandler>
            <RootNavigation />
          </UserHandler>
        </CountryHandler>
      </Theme>
    </Provider>
  );
};

export default App;
