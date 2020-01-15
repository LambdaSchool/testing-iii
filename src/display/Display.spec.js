// Test away!
import React from 'react';
import 'jest-dom/extend-expect';
import {render, fireEvent} from 'react-testing-library';

import Display from '../display/Display.js';


 it('renders without crashing', () => {
    render(<Display />)
});


const displayComponent = render(<Display />);
