import React from 'react';
import { render } from 'react-testing-library';

// Test away!

import Display from './Display';

test ('Display snapshot', () => {
    expect(render(<Display/>)).toMatchSnapshot();
});



