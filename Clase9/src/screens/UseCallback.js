import React, {useCallback, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const randomColor = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16);

const Button = ({onPress, title}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{backgroundColor: randomColor(), padding: 5}}>
    <Text style={{fontSize: 20}}>{title}</Text>
  </TouchableOpacity>
);

const functions = new Set();

const UseCallback = () => {
  const [delta, setDelta] = useState(1);
  const [incremental, setIncremental] = useState(0);

  const incrementDelta = useCallback(() => setDelta((delta) => delta + 1), []);
  const incremento = useCallback(
    () => setIncremental((incremental) => incremental + delta),
    [delta],
  );

  functions.add(incrementDelta);
  functions.add(incremento);

  return (
    <View style={styles.container}>
      <Text> Delta es {delta}</Text>
      <Text> Contador es {incremental}</Text>
      <View style={styles.box}>
        <Button onPress={incrementDelta} title="Incrementar Delta" />
        <Button onPress={incremento} title="Incrementar Counter" />
      </View>
      <Text>Nuevas funciones agregadas al set: {functions.size - 2}</Text>
    </View>
  );
};

export default UseCallback;
