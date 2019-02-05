// Test away!
import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

it('checks to see if Display renders without crashing', () =>{
    const component = render(<Display />);
});

it('checks to see if gate defaults to open', () =>{
    const component = render(<Display />);
    const div = component.
}