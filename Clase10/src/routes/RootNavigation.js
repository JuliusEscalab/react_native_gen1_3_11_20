import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen from './TestStack';
import HomeTab from './BottomTabStack';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Tabs" component={HomeTab} />
      <RootStack.Screen name="Screens" component={Screen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
