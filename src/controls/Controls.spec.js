// Test away!
import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

it('checks to see if Controls renders without crashing', () =>{
    const component = render(<Controls />);
});