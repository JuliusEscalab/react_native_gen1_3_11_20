import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import colors from '../../config/colors';
import {logout} from '../../redux/actions';
import {useTheme} from '../../context/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 10,
  },
});

const Menu = ({logout}) => {
  const {mainTheme, darkModeEnabled, toggleDarkMode} = useTheme();

  const {backgroundColor, textColor} = mainTheme;

  AntDesignIcon.loadFont();

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Switch
        trackColor={{false: colors.white, true: colors.gray}}
        thumbColor={darkModeEnabled ? colors.black : colors.white}
        ios_backgroundColor={colors.white}
        onValueChange={toggleDarkMode}
        value={darkModeEnabled}
      />
      <TouchableOpacity onPress={logout} style={styles.button}>
        <AntDesignIcon name="logout" color={textColor} size={30} />
        <Text style={[styles.text, {color: textColor}]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
