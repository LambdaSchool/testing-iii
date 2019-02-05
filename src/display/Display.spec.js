// Test away!
import React from 'react';
import {render, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup);

it('checks to see if Display renders without crashing', () =>{
    const component = render(<Display />);
});

it('checks to see if gate defaults to open and unlocked', () =>{
    const component = render(<Display closed = {false} locked = {false}/>);
    const open = component.getByText(/open/i);
    const unlocked = component.getByText(/unlocked/i);

    expect(open).toHaveTextContent(/open/i);
    expect(unlocked).toHaveTextContent(/unlocked/i);
});

//Below fails when I use reg ex for get by Text?

it('checks to see if gate has red led when closed', () =>{
    const component = render(<Display closed = {true}  />);
    const closed = component.getByText('Closed');
    expect(closed).toHaveClass('red-led');
  
});

it('checks to see if gate has red led when locked', () =>{
    const component = render(<Display locked = {true} />);
    const locked = component.getByText('Locked');
    expect(locked).toHaveClass('red-led');
})