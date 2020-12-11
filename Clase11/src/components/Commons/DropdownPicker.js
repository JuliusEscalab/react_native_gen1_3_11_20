import React from 'react';
import Dropdown from 'react-native-dropdown-picker';
import colors from '../../config/colors';

const DropdownPicker = ({countries = [], onSelect = () => {}}) => (
  <Dropdown
    items={countries}
    placeholder="Selecciona un país"
    containerStyle={{height: 40}}
    style={{backgroundColor: colors.white}}
    onChangeItem={onSelect}
    searchable
  />
);

export default DropdownPicker;
