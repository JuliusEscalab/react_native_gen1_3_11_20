import React, {Component} from 'react';
import {View, Button, Text, ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import TotalData from '../components/Home/TotalData';
import DropdownPicker from '../components/Commons/DropdownPicker';
import IconFeather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LineChartData from '../components/Commons/LineChart';
import colors from '../config/colors';
import Loading from '../components/Commons/Loading';

const styles = StyleSheet.create({
  container: {backgroundColor: '#2c3e50', flex: 1},
});

export default class Home extends Component {
  constructor(props) {
    super(props);

    IconFeather.loadFont();

    this.state = {
      currentData: [],
      countries: [],
      selectedCountry: '',
      isLoading: false,
    };
  }

  componentDidMount = () => {
    this.getFromStorage();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const {selectedCountry: currentSelectedCountry} = this.state;
    const {selectedCountry: lastSelectedCountry} = prevState;

    if (lastSelectedCountry !== currentSelectedCountry) {
      this.fetchData(currentSelectedCountry);
    }
  };

  getFromStorage = async () => {
    const formattedCountries = JSON.parse(
      await AsyncStorage.getItem('countries'),
    );
    this.setState({countries: formattedCountries || []});
  };

  fetchCountries = async () => {
    try {
      const {status, data} = await axios.get(
        'https://api.covid19api.com/countries',
      );
      if (status === 200) {
        const formattedCountries = data.map((country) => ({
          label: country.Country,
          value: country.Slug,
        }));

        await AsyncStorage.setItem(
          'countries',
          JSON.stringify(formattedCountries),
        );

        this.setState({countries: formattedCountries});
      }
    } catch (error) {
      this.setState({countries: []});
    }
  };

  fetchData = async (selectCountry) => {
    this.setState({isLoading: true});
    try {
      const {status, data} = await axios({
        baseURL: 'https://api.covid19api.com',
        method: 'GET',
        url: `/country/${selectCountry}`,
        timeout: 3000,
      });

      if (status === 200) {
        this.setState({currentData: data});
      }
    } catch (error) {
      console.log({error});
      this.setState({currentData: []});
    }

    this.setState({isLoading: false});
  };

  getLastValue = (currentValue, key) => {
    const lastValue = currentValue.slice(-1);

    if (lastValue.length) {
      return lastValue[0][key];
    }
    return 0;
  };

  selectCountry = ({value}) => this.setState({selectedCountry: value});

  backupData = async ({
    country,
    totalConfirmed,
    totalRecovered,
    totalDeaths,
    totalActive,
  }) => {
    // const response = await axios({
    //   baseURL: 'https://5f79f3e1e402340016f935ed.mockapi.io',
    //   url: 'react-native',
    //   data: {
    //     a: 2,
    //   },
    // });

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

    console.log({response});
  };

  render() {
    const {currentData, countries, isLoading, selectedCountry} = this.state;

    const totalConfirmed = this.getLastValue(currentData, 'Confirmed');
    const totalRecovered = this.getLastValue(currentData, 'Recovered');
    const totalDeaths = this.getLastValue(currentData, 'Deaths');
    const totalActive = this.getLastValue(currentData, 'Active');

    const lineChartConfirmed = currentData.map((data) => data.Confirmed);
    const lineChartRecovered = currentData.map((data) => data.Recovered);
    const lineChartDeaths = currentData.map((data) => data.Deaths);
    const lineChartActive = currentData.map((data) => data.Active);

    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Button
          color="yellow"
          onPress={() => this.fetchCountries()}
          title="Fetch de Países"
        />
        <Button
          disabled
          color="green"
          onPress={() => navigation.navigate('Screens')}
          title="Ir a Screens"
        />
        <DropdownPicker countries={countries} onSelect={this.selectCountry} />

        <Button
          title="backup data"
          onPress={() =>
            this.backupData({
              country: selectedCountry,
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
  }
}
