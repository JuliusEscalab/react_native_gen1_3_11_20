import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../config/colors';

const Screen3 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
        <Text style={{color: colors.white, fontSize: 30}}>
          Navegar a Screen 1
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen3;
