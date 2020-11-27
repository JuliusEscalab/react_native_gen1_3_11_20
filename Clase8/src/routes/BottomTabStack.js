import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack';
import World from '../screen/World';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import colors from '../config/colors';

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BottomTabs = createBottomTabNavigator();

const HomeTab = () => (
  <BottomTabs.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: colors.black,
      inactiveTintColor: colors.gray,
    }}>
    <BottomTabs.Screen
      name="Home"
      component={HomeNavigation}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          MaterialCommunityIcon.loadFont();
          return (
            <View style={styles.icon}>
              <MaterialCommunityIcon name="home" color={color} size={30} />
              <Text style={{color, marginLeft: 10}}>Home</Text>
            </View>
          );
        },
      }}
    />
    <BottomTabs.Screen
      name="World"
      component={World}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          FontistoIcon.loadFont();
          return (
            <View style={styles.icon}>
              <FontistoIcon name="world" color={color} size={30} />
              <Text style={{color, marginLeft: 10}}>World</Text>
            </View>
          );
        },
      }}
    />
  </BottomTabs.Navigator>
);

export default HomeTab;
