import React from 'react';
import { render } from 'react-testing-library';

// Test away!

import Display from './Display';

test ('Display renders correctly', () => {
    expect(render(<Display/>)).toMatchSnapshot();
});

