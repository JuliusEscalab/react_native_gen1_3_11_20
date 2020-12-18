import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Summary from '../screen/Photo/Summary';
import Camera from '../screen/Photo/Camera';

const PhotoStack = createStackNavigator();

const PhotoNavigation = () => (
  <PhotoStack.Navigator headerMode="none">
    <PhotoStack.Screen name="Summary" component={Summary} />
    <PhotoStack.Screen name="Camera" component={Camera} />
  </PhotoStack.Navigator>
);

export default PhotoNavigation;
