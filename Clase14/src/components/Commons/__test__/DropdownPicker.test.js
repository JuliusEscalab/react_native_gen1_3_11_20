import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DropdownPicker from '../DropdownPicker';

describe('DropdownPicker component ::', () => {
  it('is rendering correctly', () => {
    const container = render(<DropdownPicker />);
    expect(container).toBeTruthy();
  });

  it('is rendering correctly with props', () => {
    const country = {label: 'testLabel', value: 'testValue'};
    const props = {
      countries: [country],
      onSelect: jest.fn(),
    };

    const {getByText} = render(<DropdownPicker {...props} />);

    const option = getByText(country.label);

    fireEvent.press(option);

    expect(props.onSelect).toHaveBeenCalled();
    expect(props.onSelect.mock.calls[0][0].value).toBe(country.value);
  });
});
