import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import TotalData from '../components/Home/TotalData';
import IconFeather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../config/colors';
import Loading from '../components/Commons/Loading';
import {ThemeContext} from '../context/Theme';

const styles = StyleSheet.create({
  container: {backgroundColor: '#2c3e50', flex: 1},
});

class World extends Component {
  static contextType = ThemeContext;

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
    this.fetchWorldData();
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

  fetchWorldData = async () => {
    this.setState({isLoading: true});
    try {
      const {status, data} = await axios({
        baseURL: 'https://api.covid19api.com',
        method: 'GET',
        url: '/world/total',
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

  render() {
    const {currentData, isLoading} = this.state;
    const {
      mainTheme: {backgroundColor, textColor},
    } = this.context;

    const totalConfirmed = currentData?.TotalConfirmed;
    const totalRecovered = currentData?.TotalRecovered;
    const totalDeaths = currentData?.TotalDeaths;
    const totalActive = 'Unknown';

    return (
      <View style={[styles.container, {backgroundColor}]}>
        <Button
          title="Refrescar"
          onPress={() => this.fetchWorldData()}
          color={colors.yellow}
        />
        <Loading isLoading={isLoading} color={colors.white}>
          <TotalData
            totalConfirmed={totalConfirmed}
            totalRecovered={totalRecovered}
            totalDeaths={totalDeaths}
            totalActive={totalActive}
          />
        </Loading>
      </View>
    );
  }
}

// const WorldWrapper = () => (
//   <ThemeContext.Consumer>
//     {({mainTheme}) => <World mainTheme={mainTheme} />}
//   </ThemeContext.Consumer>
// );

// export default WorldWrapper;
export default World;
