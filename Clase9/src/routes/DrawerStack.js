import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuScreen from '../screens/Menu';
import {Screen1} from '../screens/Screen1';
import UseState from '../screens/UseState';
import UseCallback from '../screens/UseCallback';
import UseMemo from '../screens/UseMemo';

const MenuDrawer = createDrawerNavigator();

const Drawer = () => (
  <MenuDrawer.Navigator drawerContent={MenuScreen}>
    <MenuDrawer.Screen name="Screen1" component={Screen1} />
    <MenuDrawer.Screen name="Menu" component={MenuScreen} />
    <MenuDrawer.Screen name="UseState" component={UseState} />
    <MenuDrawer.Screen name="UseCallback" component={UseCallback} />
    <MenuDrawer.Screen name="UseMemo" component={UseMemo} />
  </MenuDrawer.Navigator>
);

export default Drawer;
