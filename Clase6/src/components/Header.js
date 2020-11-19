import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

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

export default class Header extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Titulo por defecto',
};
