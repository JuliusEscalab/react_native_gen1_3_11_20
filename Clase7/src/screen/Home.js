import React, {Component} from 'react';
import {Button, Text, ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import TotalData from '../components/Home/TotalData';
import DropdownPicker from '../components/Commons/DropdownPicker';
import IconFeather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LineChartData from '../components/Commons/LineChart';
import colors from '../config/colors';
import Loading from '../components/Commons/Loading';

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
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
      const {status, data} = await axios.get(
        `https://api.covid19api.com/country/${selectCountry}`,
      );
      if (status === 200) {
        this.setState({currentData: data});
      }
    } catch (error) {
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

  render() {
    const {currentData, countries, isLoading} = this.state;

    const totalConfirmed = this.getLastValue(currentData, 'Confirmed');
    const totalRecovered = this.getLastValue(currentData, 'Recovered');
    const totalDeaths = this.getLastValue(currentData, 'Deaths');
    const totalActive = this.getLastValue(currentData, 'Active');

    const lineChartConfirmed = currentData.map((data) => data.Confirmed);
    const lineChartRecovered = currentData.map((data) => data.Recovered);
    const lineChartDeaths = currentData.map((data) => data.Deaths);
    const lineChartActive = currentData.map((data) => data.Active);

    return (
      <ScrollView style={styles.container}>
        <Button
          color="yellow"
          onPress={() => this.fetchData()}
          title="Llamar a axios"
        />
        <DropdownPicker countries={countries} onSelect={this.selectCountry} />
        <Loading isLoading={isLoading} color={colors.white}>
          <TotalData
            totalConfirmed={totalConfirmed}
            totalRecovered={totalRecovered}
            totalDeaths={totalDeaths}
            totalActive={totalActive}
          />
        </Loading>
        <Loading isLoading={isLoading} color={colors.white}>
          <LineChartData
            data={lineChartConfirmed}
            color={colors.blue}
            title="Confirmados"
          />
          <LineChartData
            data={lineChartRecovered}
            color={colors.green}
            title="Recuperados"
          />
          <LineChartData
            data={lineChartDeaths}
            color={colors.red}
            title="Fallecidos"
          />
          <LineChartData
            data={lineChartActive}
            color={colors.yellow}
            title="Activos"
          />
        </Loading>
      </ScrollView>
    );
  }
}
