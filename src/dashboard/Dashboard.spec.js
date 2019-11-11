import React from 'react';
import { render } from 'react-testing-library';

// Test away!

import Dashboard from './Dashboard';

test ('Display renders correctly', () => {
    expect(render(<Dashboard/>)).toMatchSnapshot();
});

