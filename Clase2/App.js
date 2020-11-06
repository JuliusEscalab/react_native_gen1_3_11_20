/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    backgroundColor: 'gray',
    width: width * 0.2,
    height: 200,
  },
});

const App: () => React$Node = () => {
  const response = 'Wrong User';
  console.log('Dimensions: ', {height, width});

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#ecf0f1'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'blue'}}>Text 1</Text>
            <Text style={{color: 'red'}}>Text 2</Text>
          </View>
          <View
            style={{
              backgroundColor: '#2ecc71',
              padding: 20,
              margin: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#e67e22',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                textDecorationLine: 'underline',
              }}>
              {response}
            </Text>
          </View>
          <Button
            onPress={() => {
              console.log('boton error');
            }}
            color="#e74c3c"
            title="Error"
          />
          <Button
            onPress={() => {
              console.log('boton warning');
            }}
            color="#f1c40f"
            title="Warning"
          />
          <Button color="#2ecc71" title="Success" />
          <Button color="#3498db" title="Info" />
          <TouchableOpacity
            style={{
              backgroundColor: '#2ecc71',
              padding: 5,
              alignSelf: 'center',
              alignItems: 'center',
            }}
            onPress={() => console.log('Touchable button')}
            onLongPress={() => console.log('Touchable onLongPress')}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                textDecorationLine: 'underline',
              }}>
              Boton touchable
            </Text>
          </TouchableOpacity>
          {/* <TouchableWithoutFeedback
          style={{
            backgroundColor: '#2ecc71',
            padding: 5,
            alignSelf: 'center',
            alignItems: 'center',
          }}
          onPress={() => console.log('TouchableWithoutFeedback button')}
          onLongPress={() =>
            console.log('TouchableWithoutFeedback onLongPress')
          }>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              textDecorationLine: 'underline',
            }}>
            Boton touchable
          </Text>
        </TouchableWithoutFeedback> */}
          <TouchableHighlight
            style={{
              backgroundColor: '#2ecc71',
              padding: 5,
              alignSelf: 'center',
              alignItems: 'center',
            }}
            onPress={() => console.log('Touchable button')}
            onLongPress={() => console.log('Touchable onLongPress')}
            underlayColor="#27ae60">
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                textDecorationLine: 'underline',
              }}>
              Boton touchable
            </Text>
          </TouchableHighlight>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOVTmb0ILbDI6ggGhPKUkn3v4UKc2dNB-Kjng7aGM14UbvzKY',
            }}
          />
          <ImageBackground
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}>
            <Text style={{backgroundColor: 'gray'}}>Texto</Text>
          </ImageBackground>
        </ScrollView>
        <FlatList
          data={[
            {id: 1, nombre: 'Bla'},
            {id: 2, nombre: 'Foo'},
            {id: 3, nombre: 'Foo'},
          ]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item: {id, nombre}}) => {
            return (
              <View>
                <Text>Hola {nombre}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
