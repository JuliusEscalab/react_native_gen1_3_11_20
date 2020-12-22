import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../config/colors';

const Screen2 = ({navigation, route}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
        <Text style={{color: colors.white, fontSize: 30}}>
          Navegar a Screen 3
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;
