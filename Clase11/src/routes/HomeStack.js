import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home/Home';
import Charts from '../screen/Home/Charts';
import Countries from '../screen/Home/Countries';

const HomeStack = createStackNavigator();

const HomeNavigation = () => (
  <HomeStack.Navigator headerMode="none" initialRouteName="Countries">
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Charts" component={Charts} />
    <HomeStack.Screen name="Countries" component={Countries} />
  </HomeStack.Navigator>
);

export default HomeNavigation;
