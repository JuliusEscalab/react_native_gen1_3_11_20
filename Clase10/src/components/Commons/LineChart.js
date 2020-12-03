import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {YAxis, LineChart, Grid} from 'react-native-svg-charts';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    height: 200,
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LineChartData = ({title, data = [], color}) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.container}>
      {data.length ? (
        <>
          <YAxis
            data={data}
            contentInset={{top: 20, bottom: 20}}
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={(value) => value}
          />
          <LineChart
            style={{flex: 1, marginLeft: 16}}
            data={data}
            svg={{stroke: color}}
            contentInset={{top: 20, bottom: 20}}>
            <Grid />
          </LineChart>
        </>
      ) : (
        <Text>No hay información disponible</Text>
      )}
    </View>
  </View>
);

export default LineChartData;
