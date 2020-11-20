import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CustomText from './CustomText';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#bdc3c7',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: '#34495e',
    fontSize: 35,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

const Header = ({title = 'Titulo por defecto'}) => (
  <View style={styles.container}>
    <CustomText style={styles.title} italic weight="normal" color="green">
      {title}
    </CustomText>
  </View>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Titulo por defecto',
};
