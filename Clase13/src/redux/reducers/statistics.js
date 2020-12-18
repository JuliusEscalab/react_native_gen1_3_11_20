const defaultState = {
  selectedCountry: null,
};

const statistics = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_COUNTRY':
      return {
        ...state,
        selectedCountry: action.country,
      };
    default:
      return state;
  }
};

export default statistics;
