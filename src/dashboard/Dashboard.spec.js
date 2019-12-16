// Test away

// 1) Bring in all dependencies. 
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dash from './Dashboard';

// 2) Set up Cleanup

afterEach(rtl.cleanup)

// 3) Set up operations in before each (wrapper)

let wrapper;
let Unlocked = () => wrapper.queryByText('Unlocked');
let Open = () => wrapper.queryByText('Open');
let Locked = () => wrapper.queryByText('Locked');
let Closed = () => wrapper.queryByText('Closed');
beforeEach(() => {
    wrapper = rtl.render(<Dash/>)
});

// 4) Make a trivial test

it('renders without crashing', () => {
    expect(wrapper.container).toMatchSnapshot();
});

describe('Dashboard component, when we CLOSE the gate', () => {
    // promgrammatically click on the CLOSE button
    // and re rest everything

    it('clicking close makes ', () => {
        rtl.fireEvent.click(CloseGate())
        expect(wrapper.container).toMatchSnapshot();
    })

    it('matches snapshot after closing and locking the gate', () => {
        rtl.fireEvent.click(CloseGate())
        rtl.fireEvent.click(LockGate())
        expect(wrapper.container).toMatchSnapshot();
    })
})