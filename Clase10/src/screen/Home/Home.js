import React, {Component, useEffect, useMemo, useState} from 'react';
import {View, Button, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import axios from 'axios';
import TotalData from '../../components/Home/TotalData';
import DropdownPicker from '../../components/Commons/DropdownPicker';
import IconFeather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../config/colors';
import Loading from '../../components/Commons/Loading';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {capitalize} from '../../utils';

const styles = StyleSheet.create({
  container: {backgroundColor: '#2c3e50', flex: 1},
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
  },
});

const Home = ({
  navigation,
  route: {
    params: {slug, country},
  },
}) => {
  const [currentData, updateCurrentData] = useState([]);
  const [isLoading, updateIsLoading] = useState(false);
  const {top} = useSafeAreaInsets();
  const getLastValue = (currentValue, key) => {
    const lastValue = currentValue.slice(-1);

    if (lastValue.length) {
      return lastValue[0][key];
    }
    return 0;
  };

  const fetchData = async (selectCountry) => {
    updateIsLoading(true);
    try {
      const {status, data} = await axios({
        baseURL: 'https://api.covid19api.com',
        method: 'GET',
        url: `/country/${selectCountry}`,
        timeout: 3000,
      });

      if (status === 200) {
        updateCurrentData(data);
      }
    } catch (error) {
      console.log({error});
      updateCurrentData([]);
    }

    updateIsLoading(false);
  };

  const backupData = async ({
    totalConfirmed,
    totalRecovered,
    totalDeaths,
    totalActive,
  }) => {
    const response = await axios.post(
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

  useEffect(() => {
    IconFeather.loadFont();
  }, []);

  useEffect(() => {
    fetchData(slug);
  }, [slug]);

  const [
    totalConfirmed,
    totalRecovered,
    totalDeaths,
    totalActive,
    lineChartConfirmed,
    lineChartRecovered,
    lineChartDeaths,
    lineChartActive,
  ] = useMemo(() => {
    return [
      getLastValue(currentData, 'Confirmed'),
      getLastValue(currentData, 'Recovered'),
      getLastValue(currentData, 'Deaths'),
      getLastValue(currentData, 'Active'),
      currentData.map((data) => data.Confirmed),
      currentData.map((data) => data.Recovered),
      currentData.map((data) => data.Deaths),
      currentData.map((data) => data.Active),
    ];
  }, [currentData]);

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <Text style={styles.title}>{capitalize(country)}</Text>
      <Button
        disabled
        color="green"
        onPress={() => navigation.navigate('Screens')}
        title="Ir a Screens"
      />
      <Button
        title="backup data"
        onPress={() =>
          backupData({
            totalConfirmed,
            totalActive,
            totalDeaths,
            totalRecovered,
          })
        }
      />

      <Loading isLoading={isLoading} color={colors.white}>
        <TotalData
          totalConfirmed={totalConfirmed}
          totalRecovered={totalRecovered}
          totalDeaths={totalDeaths}
          totalActive={totalActive}
        />
      </Loading>
      <Button
        color={colors.white}
        onPress={() =>
          navigation.navigate('Charts', {
            lineChartConfirmed,
            lineChartRecovered,
            lineChartDeaths,
            lineChartActive,
          })
        }
        title="Ir a Charts"
      />
    </View>
  );
};

export default Home;
