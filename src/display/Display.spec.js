// 1) Bring in dependencies.
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

// 2) Set up Cleanup
afterEach(rtl.cleanup)

// 3) Set up operations in before each (wrapper)
describe('Display', () => {
    it('renders correctly', () => {
        const wrapper = rtl.render(<Display/>);
        expect(wrapper.baseElement).toMatchSnapshot();
    });

    it('Opens in Unlocked and Open state', () => {
        const defaultState = rtl.render(<Display/>);
        defaultState.queryByText('Unlocked', 'Open');
    })
});