import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Charts from '../screen/Charts';

const HomeStack = createStackNavigator();

const HomeNavigation = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Charts" component={Charts} />
  </HomeStack.Navigator>
);

export default HomeNavigation;
