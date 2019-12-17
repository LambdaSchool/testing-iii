// Test away!

import React from 'react';
import Display from './Display';
import { render } from '@testing-library/react';

test('Correct item is rendering based on closed and locked', () => {
    const closed = true;
    const locked = false;
    const { getByText, rerender } = render(<Display closed={closed} locked={locked} />);
    getByText('Unlocked');

    rerender(<Display closed={closed} locked={locked} />)
    getByText('Closed');


})