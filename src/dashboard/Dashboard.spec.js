// 1) Bring in all dependencies. 
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dash from './Dashboard';
import Dashboard from './Dashboard';

// 2) Set up Cleanup

afterEach(rtl.cleanup)

// 3) Set up operations in before each (wrapper)

// let wrapper;
let UnlockedANDOpen = () => wrapper.queryByText('Unlocked', 'Open', 'Close Gate');
let UnlockedAndClose = () => wrapper.queryByText('Lock Gate', 'Open Gate');
let LockedAndClosed = () => wrapper.queryByText('Unlock Gate', 'Locked', 'Closed');


beforeEach(() => {
    wrapper = rtl.render(<Dash/>)
});

// 4) Make a trivial test

it('renders without crashing', () => {
    const dashboardWrapper = rtl.render(<Dashboard/>)
    expect(dashboardWrapper.baseElement).toMatchSnapshot();
});

describe('Dashboard component, after loading, when we click \'Close Gate', () => {
    // promgrammatically click on the CLOSE button
    // and re rest everything

    // it('clicking CloseGate makes ', () => {
    //     rtl.fireEvent.click(CloseGate())
    //     expect(dashboardWrapper.container).toMatchSnapshot();
    // })

    // it('matches snapshot after closing and locking the gate', () => {
    //     rtl.fireEvent.click(CloseGate())
    //     rtl.fireEvent.click(LockGate())
    //     expect(dashboardWrapper.container).toMatchSnapshot();
    // })
})


// describe('Unlocked and Close => When we click Lock Gate'), () => {

//     it('')
// }




// it("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
//     wrapper = rtl.render(<Display />);
//     expect(Open()).toBeVisible();
//     wrapper = rtl.render(<Display closed={true}/>);
//     expect(Closed()).toBeVisible();
// });