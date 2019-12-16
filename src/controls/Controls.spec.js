import React from 'react';
import { render } from 'react-testing-library';

// Test away!

import Controls from './Controls';

test ('Controls snapshot', () => {
    expect(render(<Controls/>)).toMatchSnapshot();
});

test('toggle closed state', () => {
    const { getByTestId } = render(<Controls/>);
    getByTestId("toggle-locked");
});

test('toggle closed state', () => {
    const { getByTestId } = render(<Controls/>);
    getByTestId("toggle-closed");
});



// test('toggle button disabled if gate is locked', () => {

// })




