import React from 'react';
import {render, getByDisplayValue} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Display from './Display';

// Test away!

test('control render correct' , () => {
    expect(render(<Display/>)).toMatchSnapshot();
});


test('Uses "red-led" if locked.', () => {
    const { queryByText } = render(<Display locked={true} />);
    const locked = queryByText(/locked/i);
    expect(locked).toHaveClass('red-led');
});

test('Uses "green-led" if locked.', () => {
    const { queryByText } = render(<Display locked={false} />);
    const unlocked = queryByText(/locked/i);
    expect(unlocked).toHaveClass('green-led');
});