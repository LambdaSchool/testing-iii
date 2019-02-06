// Test away!
import React from 'react';
import Display from './Display';
import {render} from 'react-testing-library';

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
    it('Displays closed if the gate is closed.', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        getByText(/closed/i);
    })
    it('Displays locked if the gate is locked', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        getByText(/locked/i);
    })
})
