import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack';
import World from '../screen/World';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import colors from '../config/colors';
import Menu from '../screen/Menu/Menu';
import {connect} from 'react-redux';
import {countrySelector} from '../redux/selectors/statisticsSelector';
import {useTheme} from '../context/Theme';
import PhotoNavigation from './PhotoStack';

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BottomTabs = createBottomTabNavigator();

const HomeTab = ({selectedCountry}) => {
  const {
    mainTheme: {backgroundColor, textColor},
  } = useTheme();

  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        style: {
          backgroundColor,
        },
        showLabel: false,
        activeTintColor: textColor,
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
                <Text style={{color, marginLeft: 10}}>
                  {selectedCountry ? selectedCountry : 'Home'}
                </Text>
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
      <BottomTabs.Screen
        name="Summary"
        component={PhotoNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            FontistoIcon.loadFont();
            return (
              <View style={styles.icon}>
                <FontistoIcon name="camera" color={color} size={25} />
                <Text style={{color, marginLeft: 10}}>Cámara</Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            FontistoIcon.loadFont();
            return (
              <View style={styles.icon}>
                <MaterialCommunityIcon name="menu" color={color} size={30} />
                <Text style={{color, marginLeft: 10}}>Menu</Text>
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

// const mSTP = (state) => {
//   return {
//     selectedCountry: countrySelector(state),
//   };
// };
// mSTP = mapStateToProps
const mSTP = (state) => ({
  selectedCountry: countrySelector(state),
});

export default connect(mSTP)(HomeTab);
