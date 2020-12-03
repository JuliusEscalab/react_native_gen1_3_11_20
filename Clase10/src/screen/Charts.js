import React from 'react';
import {Button, ScrollView} from 'react-native';
import LineChartData from '../components/Commons/LineChart';
import colors from '../config/colors';

const Charts = ({
  navigation,
  route: {
    params: {
      lineChartConfirmed,
      lineChartRecovered,
      lineChartDeaths,
      lineChartActive,
    },
  },
}) => (
  <ScrollView style={{backgroundColor: colors.black, paddingHorizontal: 20}}>
    <Button title="Volver atrás" onPress={() => navigation.pop()} />
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
  </ScrollView>
);

export default Charts;
