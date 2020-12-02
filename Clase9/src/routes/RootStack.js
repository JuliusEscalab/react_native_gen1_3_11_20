import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Screen1} from '../screens/Screen1';
import Drawer from './DrawerStack';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Drawer" component={Drawer} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
