import React from 'react';
import { render } from 'react-testing-library';

// Test away!

import Controls from './Controls';

test ('Display renders correctly', () => {
    expect(render(<Controls/>)).toMatchSnapshot();
});

