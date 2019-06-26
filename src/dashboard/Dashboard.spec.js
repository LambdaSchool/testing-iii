// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    describe('Lock', () => {
        it('initialized lock to Unlocked', () => {
            const { getByText } = render(<Display />);
            const lock = getByText('Unlocked');
            expect(lock.textContent).toBe('Unlocked');
        });

        it('display locked status', () => {
            const { getByText } = render(<Display locked={true} />);
            const lock = getByText('Locked');
            expect(lock.textContent).toBe('Locked');
        });

        it('display unlocked status', () => {
            const { getByText } = render(<Display locked={false} />);
            const lock = getByText('Unlocked');
            expect(lock.textContent).toBe('Unlocked');
        });
    });

    describe('Gate', () => {
        it('initialized gate to Open', () => {
            const { getByText } = render(<Display />);
            const gate = getByText('Open');
            expect(gate.textContent).toBe('Open')
        });

        it('display open Gate', () => {
            const { getByText } = render(<Display closed={false} />);
            const gate = getByText('Open');
            expect(gate.textContent).toBe('Open')
        });

        it('display close Gate', () => {
            const { getByText } = render(<Display closed={true} />);
            const gate = getByText('Closed');
            expect(gate.textContent).toBe('Closed')
        });
    })
})