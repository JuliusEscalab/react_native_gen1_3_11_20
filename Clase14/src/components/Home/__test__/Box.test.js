import React from 'react';
import {render} from '@testing-library/react-native';
import Box from '../Box';

describe('Box component ::', () => {
  it('is rendering correctly', () => {
    const container = render(<Box />);
    const {getByTestId} = container;

    const boxContainer = getByTestId('box-container');

    expect(boxContainer).toBeTruthy();
    expect(container).toBeTruthy();
  });

  it('is rendering correctly with props', () => {
    const props = {
      variableData: 'testData',
      variableName: 'testName',
      color: 'red',
    };

    const {getByTestId} = render(<Box {...props} />);

    const boxContainer = getByTestId('box-container');

    const [variableData, variableName] = boxContainer.children;

    expect(boxContainer).toBeTruthy();
    expect(boxContainer.children).toHaveLength(2);
    expect(variableData.props.children).toBe(props.variableData);
    expect(variableName.props.children).toBe(props.variableName);
  });
});
