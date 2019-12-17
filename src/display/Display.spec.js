// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import Display from './Display';

import Dashboard from '../dashboard/Dashboard'

test('renders without crashing', () => {
    const statements = render(<Display />);
        console.log(statements.getByText ('Open'))
});


test('Dashboard renders without crashing', () => {
    const statements = render(<Dashboard />);
        console.log(statements.getByText ('Close Gate'))
});

test('Dashboard renders without crashing', () => {
    const statements = render(<Dashboard />);
        console.log(statements.getByText ('Unlocked'))
});

