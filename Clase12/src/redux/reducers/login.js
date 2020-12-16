const defaultState = {
  valid: undefined,
  sessionId: null,
  loading: false,
};

// Login Reducer o estados de Login
const login = (state = defaultState, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'END_LOADING':
      return {
        ...state,
        loading: false,
      };
    case 'LOGIN_SUCCESSFULL':
      return {
        ...state,
        valid: action.valid,
        sessionId: action.sessionId,
      };
    case 'LOGOUT':
      return {
        valid: action.valid,
      };
    default:
      return state;
  }
};

export default login;
