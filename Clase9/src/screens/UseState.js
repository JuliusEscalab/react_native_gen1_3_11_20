import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Input from '../components/Input';
import RadioButton from '../components/RadioButton/RadioButton';
import colors from '../config/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  separator: {
    height: 5,
    backgroundColor: colors.gray,
  },
});

const Profile = () => {
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [active, updateActive] = useState(0);

  return (
    <ScrollView>
      <Text style={styles.title}>Profile</Text>
      <Input
        value={name}
        placeholder="Nombre..."
        onChangeText={(newText) => updateName(newText)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        value={email}
        placeholder={'Email...'}
        onChangeText={(newText) => updateEmail(newText)}
        autoCapitalize="none"
        autoCorrect={false}
        email
      />
      <RadioButton title="Activo" selected={active} onChange={updateActive} />
      <View style={styles.separator} />
      <View>
        <Text style={styles.summary}>Resumen:</Text>
        <Text style={styles.summary}>Nombre: {name}</Text>
        <Text style={styles.summary}>Correo: {email}</Text>
        <Text style={styles.summary}>Activo: {active}</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
