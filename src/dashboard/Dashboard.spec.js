import React from 'react';
import { render, fireEvent } from 'react-testing-library';

// Test away!

import Dashboard from './Dashboard';

test ('Dashboard snapshot', () => {
    expect(render(<Dashboard/>)).toMatchSnapshot();
});

    test('Display after close state', () => {
        const { getByText } = render(<Dashboard />)
    
        fireEvent.click(getByText(/close gate/i))
        getByText(/closed/i)
        getByText(/unlocked/i)
        getByText(/open gate/i)
        getByText(/lock gate/i)
    })
    
    test('Display after lock', () => {
        const { getByText } = render(<Dashboard />)
    
        fireEvent.click(getByText(/close gate/i))
        fireEvent.click(getByText(/lock gate/i))
        getByText(/closed/i)
        getByText(/locked/i)
        getByText(/open gate/i)
        getByText(/unlock gate/i)
    });


    test('Display after clicking lock gate', () => {
        const { getByText } = render(<Dashboard />)
    
        fireEvent.click(getByText(/close gate/i))
        fireEvent.click(getByText(/lock gate/i))
        getByText(/closed/i)
        getByText(/unlocked/i)
        getByText(/open gate/i)
        getByText(/lock gate/i)
    });
    
    test('Displays current display after clicking lock gate', () => {
        const { getByText } = render(<Dashboard />)
    
        fireEvent.click(getByText(/close gate/i))
        fireEvent.click(getByText(/lock gate/i))
        fireEvent.click(getByText(/unlock gate/i))
        fireEvent.click(getByText(/open gate/i))
        getByText(/open/i)
        getByText(/unlocked/i)
        getByText(/close gate/i)
        getByText(/lock gate/i)
    });