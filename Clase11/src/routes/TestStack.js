import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import {View, Text} from 'react-native';
import colors from '../config/colors';

const ScreenStack = createStackNavigator();

const Screen = () => (
  <ScreenStack.Navigator headerMode="none">
    <ScreenStack.Screen name="Screen1" component={Screen1} />
    <ScreenStack.Screen name="Screen2" component={Screen2} />
    <ScreenStack.Screen name="Screen3" component={Screen3} />
  </ScreenStack.Navigator>
);

export default Screen;
