import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen from './TestStack';
import HomeTab from './BottomTabStack';
import Login from '../screen/Login/Login';
import {connect} from 'react-redux';
import {isLoggedIn} from '../redux/actions';
import {isLoginValidSelector} from '../redux/selectors/loginSelector';

const RootStack = createStackNavigator();

const RootNavigation = ({loggedIn, isCurrentlyLoggedIn}) => {
  useEffect(() => {
    isCurrentlyLoggedIn();
  }, [isCurrentlyLoggedIn]);

  if (loggedIn === undefined) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        {loggedIn ? (
          <>
            <RootStack.Screen name="Tabs" component={HomeTab} />
            <RootStack.Screen name="Screens" component={Screen} />
          </>
        ) : (
          <RootStack.Screen name="Login" component={Login} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoginValidSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  isCurrentlyLoggedIn: () => dispatch(isLoggedIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
