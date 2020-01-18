import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('Controls renders without crashing', () => {
    render(<Controls />);
});

test('Provide buttons to toggle the "closed" and "locked" states', () => {
    const { getAllByText } = render(<Controls />);
    getAllByText(/gate/i);
});

test('The button text changes to reflect the state the door will be in if clicked', () => {
    const { getByText, rerender } = render(<Controls closed={false} locked={false} />);
    getByText(/lock/i);
    getByText(/close/i);
    rerender(<Controls closed={true} locked={true} />);
    getByText(/unlock/i);
    getByText(/open/i);
});

test('The closed toggle button is disabled if the gate is locked', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    const toggleClosed = getByText(/close gate/i);
    fireEvent.click(toggleClosed);
    getByText(/close gate/i);
});

test('The locked toggle button is disabled if the gate is open', () => {
    const {getByText } = render(<Controls closed={false} locked={true} />);
    const toggleLocked = getByText(/lock gate/i);
    fireEvent.click(toggleLocked);
    getByText(/lock gate/i);
});