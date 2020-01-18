import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Dashboard renders without crashing', () => {
    render(<Dashboard />);
});

test('Controls and Display are showing properly', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlock/i);
    getByText(/lock gate/i);
    getByText(/open/i);
    getByText(/close gate/i);
});
