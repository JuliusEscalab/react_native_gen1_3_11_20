import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../../config/colors';

const Loading = ({isLoading = false, children, color = colors.black}) =>
  isLoading ? <ActivityIndicator color={color} size="large" /> : children;

export default Loading;
