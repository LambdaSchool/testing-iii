// Test away!
import React from 'react';
import Controls from './Controls'

//snapshot testing
import { render, fireEvent, getByLabelText } from "@testing-library/react";

//snapshot
test('it renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
})


test('defaults', () => {
    const{getByText} = render(<Controls/>)
    getByText(/close gate/i)
    getByText(/lock gate/i)
})

// test('toggle lock and on-lock working', () => {
//     const toggleLockMock = jest.fn(); 
//     const { getByText } = render(
//         //pass down toggleLockMock as prop
//         <Controls toggleLocked={toggleLockMock} locked={props.locked}/>
//     )
//     //(/lock/i) works
//     const lockButton = getByText(/lock/i)
//     expect(locked).toBe('Lock Gate')
//     // fireEvent.click(lockButton)
//     // //to test it is being called on click
//     // expect(toggleLockMock).toHaveBeenCalled();
//     // expect(locked).toBe('Lock Gate')
// })