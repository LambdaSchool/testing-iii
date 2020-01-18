import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Display renders without crashing', () => {
    render(<Dashboard />);
});
