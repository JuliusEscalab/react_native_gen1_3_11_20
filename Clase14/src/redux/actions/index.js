import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * LOGIN
 */

export const login = ({user, password}) => {
  return async (dispatch) => {
    dispatch({
      type: 'START_LOADING',
    });

    if (user === 'test' && password === 'test') {
      const currentSession = new Date().getTime().toString();
      AsyncStorage.setItem('sessionId', currentSession);
      dispatch({
        type: 'LOGIN_SUCCESSFULL',
        valid: true,
        sessionId: currentSession,
      });
    }

    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    dispatch({
      type: 'END_LOADING',
    });
  };
};

export const isLoggedIn = () => {
  return async (dispatch) => {
    const currentSessionId = await AsyncStorage.getItem('sessionId');
    if (currentSessionId) {
      dispatch({
        type: 'LOGIN_SUCCESSFULL',
        valid: true,
        sessionId: currentSessionId,
      });
      return;
    }

    dispatch({
      type: 'LOGOUT',
      valid: false,
    });
  };
};

export const logout = () => {
  AsyncStorage.removeItem('sessionId');
  return {
    type: 'LOGOUT',
    valid: false,
  };
};

/**
 * STATISTICS
 */

export const selectCountry = (country) => ({
  type: 'SELECT_COUNTRY',
  country,
});
