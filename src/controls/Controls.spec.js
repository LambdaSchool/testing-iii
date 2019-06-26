// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {
    describe('Lock Control', () => {
        it('rerenders lock', () => {
            const { getByText, rerender } = render(<Controls locked={false} />);
            let lock = getByText('Lock Gate');
            expect(lock.textContent).toBe('Lock Gate');

            rerender(<Controls locked={true} />);
            lock = getByText('Unlock Gate');
            expect(lock.textContent).toBe('Unlock Gate');
        });
    });

    describe('Gate Control', () => {
        it('rerenders gate', () => {
            const { getByText, rerender } = render(<Controls closed={false} />);
            let gate = getByText('Close Gate');
            expect(gate.textContent).toBe('Close Gate');

            rerender(<Controls closed={true} />);
            gate = getByText('Open Gate');
            expect(gate.textContent).toBe('Open Gate');
        });
    });
})
