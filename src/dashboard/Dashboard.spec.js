// Test away
import React from "react";
import  Dashboard from './Dashboard';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import { render } from "@testing-library/react";

afterEach(rtl.cleanup);

test('Renders Dashboard/display correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})

test('Close on click of close gate', async () => {
    const { getByText, getByTestId } = rtl.render(<Dashboard />);

    const closedMessage = getByTestId('gate-feature');
    expect(closedMessage).not.toBeNull();

    const button = getByTestId('gate-feature');
    await fireEvent.click(button);

    expect(getByText(/closed/i));
});

test('Locked when locking gate after closing gate', async () => {
    const { getByText, getByTestId } = rtl.render(<Dashboard />);
    const toggleGate = getByTestId('gate-feature');
    const lockGate = getByTestId('locking-feature');

    const toggleGateButton= toggleGate;
    const lockGateButton = lockGate;

    fireEvent.click(toggleGateButton);
    expect(getBy(/closed/i));
    await fireEvent.click(lockGateButton);
    expect(getByText(/locked/i));
})

// test('Is locked', async () => {
//     const wrapper = rtl.render(<Dashboard /> );
//     await wrapper.findAllByText(/locked/i);

//     const locked = wrapper.getByText(/locked/i)

//     rtl.act(() => {
//         rtl.fireEvent.click(locked)
//     })

//     expect(wrapper.queryByText(/locked/i)).toBeNull()
// })

// test('Is closed', async () => {
//     const wrapper = rtl.render(<Dashboard />);
//     await wrapper.findAllByText(/closed/i);

//     const closed = wrapper.getByText(/closed/i)

//     rtl.act(() => {
//         rtl.fireEvent.click(closed)
//     })

//     expect(wrapper.queryByText(/closed/i)).toBeNull()
// })

