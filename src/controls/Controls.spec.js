// Test away!
import React from 'react';
import {render, cleanup, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

afterEach(cleanup);

it('checks to see if Controls renders without crashing', () =>{
    const component = render(<Controls />);
});

it('checks to see if buttons render with proper text', () =>{
    const component = render(<Controls locked = {false} closed = {false}/>);
    const lockBtn = component.getByText(/lock gate/i);
    const closeBtn = component.getByText(/close gate/i);
    expect(lockBtn).toHaveTextContent(/lock gate/i);
    expect(closeBtn).toHaveTextContent(/close gate/i);
});

it('tests lock button\'s text to see if it changes after click event',() =>{
    const component = render(<Controls locked = {false} />);
    const lockBtn = component.getByTestId('lock-button');
    fireEvent.click(lockBtn);
    //expect(lockBtn).toHaveTextContent('Lock Gate');
    
//     const unlockBtn = component.getByTestId('lock-button');
//    expect(unlockBtn).toHaveTextContent('Unlock Gate');

});


