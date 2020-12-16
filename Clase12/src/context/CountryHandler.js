import Axios from 'axios';
import React, {createContext, useContext, useReducer, useState} from 'react';
import {Alert} from 'react-native';

export const CountryContext = createContext();

const defaultState = {
  country: null,
  slug: null,
  totalConfirmed: 0,
  totalRecovered: 0,
  totalDeaths: 0,
  totalActive: 0,
  lineChartConfirmed: [],
  lineChartRecovered: [],
  lineChartDeaths: [],
  lineChartActive: [],
};

const getLastValue = (currentValue, key) => {
  const lastValue = currentValue.slice(-1);

  if (lastValue.length) {
    return lastValue[0][key];
  }
  return 0;
};

const countryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNTRY': {
      return {
        ...state,
        country: action.country,
        slug: action.slug,
      };
    }
    case 'ADD_COUNTRY_DATA': {
      return {
        ...state,
        ...action.countryData,
      };
    }
    default:
      return state;
  }
};

const CountryHandler = ({children}) => {
  const [state, dispatch] = useReducer(countryReducer, defaultState);
  const [isLoading, updateIsLoading] = useState(false);

  const backupData = async () => {
    const {
      country,
      totalConfirmed,
      totalRecovered,
      totalDeaths,
      totalActive,
    } = state;
    const response = await Axios.post(
      'https://5f79f3e1e402340016f935ed.mockapi.io/react-native',
      {
        datetime: new Date().toISOString(),
        country,
        total_confirmed: totalConfirmed,
        total_recovered: totalRecovered,
        total_deaths: totalDeaths,
        total_active: totalActive,
      },
    );

    Alert.alert('Mensaje', '¡Guardado!');
  };

  const fetchData = async (selectCountry) => {
    updateIsLoading(true);
    try {
      const {status, data} = await Axios({
        baseURL: 'https://api.covid19api.com',
        method: 'GET',
        url: `/country/${selectCountry}`,
        timeout: 3000,
      });

      if (status === 200) {
        const countryData = {
          totalConfirmed: getLastValue(data, 'Confirmed'),
          totalRecovered: getLastValue(data, 'Recovered'),
          totalDeaths: getLastValue(data, 'Deaths'),
          totalActive: getLastValue(data, 'Active'),
          lineChartConfirmed: data.map(
            (currentValue) => currentValue.Confirmed,
          ),
          lineChartRecovered: data.map(
            (currentValue) => currentValue.Recovered,
          ),
          lineChartDeaths: data.map((currentValue) => currentValue.Deaths),
          lineChartActive: data.map((currentValue) => currentValue.Active),
        };

        dispatch({type: 'ADD_COUNTRY_DATA', countryData});
      }
    } catch (error) {
      console.log({error});
    }
    updateIsLoading(false);
  };

  const selectCountry = async (country, slug) => {
    if (country === null) {
      await dispatch({type: 'ADD_COUNTRY', country: null, slug: null});
      return;
    }

    await dispatch({type: 'ADD_COUNTRY', country, slug});
    await fetchData(slug);
  };

  return (
    <CountryContext.Provider
      value={{
        state,
        isLoading,
        selectCountry,
        backupData,
      }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryHandler;

export const useCountryData = () => {
  const context = useContext(CountryContext);

  if (context === undefined) {
    throw new Error('useCountryData debe ser usado dentro de CountryHandler');
  }

  return context;
};
