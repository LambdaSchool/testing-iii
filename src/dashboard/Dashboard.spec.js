// Test away
import React from 'react';
import { render } from '@testing-library/react';
import DashBoard from './DashBoard'

test('should match snapshot', () => {
    expect(render(<DashBoard/>)).toMatchSnapshot();
  });
