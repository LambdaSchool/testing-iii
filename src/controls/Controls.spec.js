// Test away!
// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open


import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

test('provide buttons to toggle the `closed` and `locked` states', () => {
    const {getByTestId} = render(<Controls />);
    getByTestId(/lock/i);
    getByTestId(/action/i)
});

test('buttons text changes to reflect the state the door will be in if clicked', () => {
    const {getByText} = render(<Dashboard />);
    const action = getByText('Close Gate');
    const lock = getByText('Lock Gate');
    fireEvent.click(action);
    getByText('Open Gate')
    fireEvent.click(lock);
    getByText('Unlock Gate');
});

test('the closed toggle button is disabled if the gate is locked', () => {
    const toggleLocked = jest.fn();
    const {getByText} = render(<Controls  toggleLocked={toggleLocked}/>);
    const lock = getByText('Lock Gate');
    fireEvent.click(lock);
    expect(toggleLocked).not.toHaveBeenCalled();
});

test('the locked toggle button is disabled if the gate is open', () => {
    const toggleClosed = jest.fn();
    const {getByText} = render(<Controls locked={true} toggleClosed={toggleClosed}/>);
    const action = getByText('Close Gate');
    fireEvent.click(action);
    expect(toggleClosed).not.toHaveBeenCalled()
}) 