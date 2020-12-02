import React, {useMemo, useState} from 'react';
import {View, Text, Button} from 'react-native';
import colors from '../config/colors';

const functions = new Set();

const UseMemo = () => {
  const [counter, updateCounter] = useState(0);
  const [name, updateName] = useState('');

  console.log({name});

  const nameComponent = useMemo(
    () => (
      <View style={{backgroundColor: colors.green, padding: 20}}>
        <Text style={{color: colors.white, fontSize: 30, textAlign: 'center'}}>
          {name}
        </Text>
      </View>
    ),
    [name],
  );

  functions.add(nameComponent);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {nameComponent}
      <Text>{`Número de funciones: ${functions.size}`}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button title="Link" onPress={() => updateName('Link')} />
        <Button title="Malon" onPress={() => updateName('Malon')} />
        <Button title="Zelda" onPress={() => updateName('Zelda')} />
      </View>
      <Text style={{textAlign: 'center', marginVertical: 10}}>{counter}</Text>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        <Button title="+" onPress={() => updateCounter((c) => c + 1)} />
        <Button title="-" onPress={() => updateCounter((c) => c - 1)} />
      </View>
    </View>
  );
};

export default UseMemo;
