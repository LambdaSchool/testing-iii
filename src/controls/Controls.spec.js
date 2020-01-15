// Test away!
import React from 'react';
import 'jest-dom/extend-expect';
import {render, fireEvent} from 'react-testing-library';


import Controls from '../controls/Controls.js';

 it('renders without crashing', () => {
    render(<Controls />)
});