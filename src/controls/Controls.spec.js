import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe('renders without crashing', () => {

  test('renders the Control component', () => {
    render(<Controls />)
  })

})
