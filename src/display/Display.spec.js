// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Display from './Display';

afterEach(cleanup);

describe('Display renders', () => {
    test('Display shows', () => {
        render(<Display />)
    })

    test('shows gate closed and locked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        getByText(/closed/i);
        getByText(/locked/i); 
    })

    test('shows gate open and unlocked', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        getByText(/open/i);
        getByText(/unlocked/i);
    })
})