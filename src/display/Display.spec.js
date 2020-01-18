import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test('Display renders without crashing', () => {
    render(<Display />);
});

test('displays if gate is open/closed and if it is locked/unlocked', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/locked/i);
    getByText(/open/i);
});

test('Displays "Closed" if the closed prop = true and "Open" if otherwise', () => {
    const { getByText } = render(<Display closed={true} />);
    getByText('Closed');
});

test('Displays "Locked" if the locked prop = true and "Unlocked" if otherwise', () => {
    const { getByText } = render(<Display locked={true} />);
    getByText('Locked');
});

test('When "locked" or "closed" use the red-led class', () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    const locked = getByText(/locked/i);
    const closed = getByText(/closed/i);
    expect(locked).toHaveClass('red-led');
    expect(closed).toHaveClass('red-led');
});

test('When "unlocked" or "open" use the green-led class', () => {
    const { getByText } = render(<Display locked={false} closed={false} />);
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);
    expect(unlocked).toHaveClass('green-led');
    expect(open).toHaveClass('green-led');
});