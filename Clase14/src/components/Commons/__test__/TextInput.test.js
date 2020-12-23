import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TextInput from '../TextInput';
import Theme from '../../../context/Theme';

describe('TextInput component ::', () => {
  const props = {
    value: 'TestValue',
    labelTag: 'TestLabel',
    placeholder: 'TestPlaceholder',
    onChange: jest.fn(),
  };

  it('is rendered correctly with props', () => {
    const container = render(
      <Theme>
        <TextInput {...props} />
      </Theme>,
    );
    expect(container).toBeTruthy();
  });

  it('calls onChange on text change', () => {
    const {getByTestId} = render(
      <Theme>
        <TextInput {...props} />
      </Theme>,
    );

    const textinput = getByTestId('TextInput');
    const newText = 'new text input';
    fireEvent.changeText(textinput, newText);

    expect(props.onChange).toHaveBeenCalled();
    expect(props.onChange.mock.calls[0][0]).toBe(newText);
  });
});
