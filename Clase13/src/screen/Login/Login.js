import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../config/colors';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {login as loginAction} from '../../redux/actions';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import {
  isLoginValidSelector,
  loginLoadingSelector,
} from '../../redux/selectors/loginSelector';

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: colors.black,
    height: 400,
    justifyContent: 'flex-end',
  },
  login: {
    margin: 20,
    fontSize: 40,
    color: colors.white,
  },
  inputContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  textInputContainer: {
    width: '80%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    borderColor: colors.green,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 35,
    marginVertical: 10,
    paddingLeft: 10,
    color: colors.gray,
  },
  inputSubmit: {
    backgroundColor: colors.green,
    padding: 5,
    right: 40,
    borderRadius: 35,
  },
});

const Login = ({loginIsValid, loading, loginIn}) => {
  const [user, updateUser] = useState('');
  const [password, updatePassword] = useState('');
  const insets = useSafeAreaInsets();
  AntDesignIcon.loadFont();

  return (
    <KeyboardAwareScrollView>
      <OverlaySpinner visible={loading} color={colors.white} size="large" />
      <View style={[styles.header, {paddingTop: insets.top}]}>
        <Text style={styles.login}>LOGIN</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Usuario"
            value={user}
            autoCapitalize="none"
            onChangeText={(text) => updateUser(text)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="*******"
            value={password}
            autoCapitalize="none"
            onChangeText={(text) => updatePassword(text)}
            style={styles.textInput}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.inputSubmit}
          onPress={() => loginIn({user, password})}>
          <AntDesignIcon name="arrowright" color={colors.white} size={60} />
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => ({
  loginIsValid: isLoginValidSelector(state),
  loading: loginLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  loginIn: ({user, password}) => dispatch(loginAction({user, password})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
