import React from 'react';
import {Text, StyleSheet} from 'react-native';

const generateFontSize = ({size = 30}) => {
  return Number(size);
};

const generateFontItalic = ({italic}) => {
  return italic ? 'italic' : 'normal';
};

const generateFontWeight = ({weight = 'normal'}) => weight;

const generateFontColor = ({color = '#2c3e50'}) => color;

const CustomText = ({style, children, ...props}) => {
  const customStyle = {
    fontSize: generateFontSize(props),
    fontStyle: generateFontItalic(props),
    fontWeight: generateFontWeight(props),
    color: generateFontColor(props),
  };

  return (
    <Text style={StyleSheet.flatten([style, customStyle])}>{children}</Text>
  );
};

export default CustomText;
