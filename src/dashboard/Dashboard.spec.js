/*
shows the controls and display
*/
import React from 'react';
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect';
import Display from '../display/Display';
import Controls from '../controls/Controls';
afterEach(cleanup)

it('renders without crashing', () => {
    render(<Display />);
    render(<Controls />);

});
