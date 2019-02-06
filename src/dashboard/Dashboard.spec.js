// Test away
import React from 'react';
import Dashboard from './Dashboard';
import {render} from 'react-testing-library';

describe('Dashboard renders without crashing.', () => {
    it('Renders the Dashboard component', () => {
        render(<Dashboard />);
    })
    it('Renders the Display component', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/open/i);
        getByText(/unlocked/i);
    })
    it('Renders the Controls component', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/close gate/i);
        getByText(/lock gate/i);
    })
});