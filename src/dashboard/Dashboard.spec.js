// Test away
import React from 'react';
import {render, getByTestId} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

it('checks to see if Dashboard renders without crashing', () =>{
    const component = render(<Dashboard />);
});

//Why can't I test the following?

// it('checks if Dashboard contains Display component', () =>{
//     const component = render(<Dashboard />);
//     const display = component.getByTestId('display-component');

// });