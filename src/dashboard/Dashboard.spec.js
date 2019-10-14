// Test away
import React from 'react';
import Dashboard from './Dashboard'
//snapshot testing
import { render, fireEvent } from "@testing-library/react";


test('it renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot()
})

// describe('<Dashboard />', () => {
//     const tree = renderer.create(<Dashboard />).toJSON();

//     expect(tree).toMatchSnapshot()
// })