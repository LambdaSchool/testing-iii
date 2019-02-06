// Test away!
import React from 'react';
import Display from './Display';
import {render, cleanup} from 'react-testing-library';

afterEach(cleanup);

describe('Display renders without crashing.', () => {
    it('Renders the Display component', () => {
        render(<Display closed={false} locked={false} />);
    })
    it('Displays open if the gate is open.', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        getByText(/open/i);
    })
    it('Displays unlocked if the gate is unlocked', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        getByText(/unlocked/i);
    })
    it('Uses the green-led class when the gate is unlocked and opened.', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        expect(getByText(/open/i).className.includes('green-led')).toBe(true);
        expect(getByText(/unlocked/i).className.includes('green-led')).toBe(true);
    })
    it('Displays closed if the gate is closed.', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        getByText(/closed/i);
    })
    it('Displays locked if the gate is locked', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        getByText(/locked/i);
    })
    it('Uses the red-led class when the gate is locked and closed.', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        expect(getByText(/closed/i).className.includes('red-led')).toBe(true);
        expect(getByText(/locked/i).className.includes('red-led')).toBe(true);
    })
})
