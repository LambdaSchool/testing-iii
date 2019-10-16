import React from "react";
import Dashboard from "./dashboard";
import Display from "../display/Display";
import { render, fireEvent } from "react-testing-library";


it('renders without crashing', () => {
    render(<Display />);
})

// it('renders without crashing', () => {
//     render(<Controls />);
// })

it('gate default is unlocked and open', () => {
    const dashboard = render(<Dashboard />);

    const unlockedStatus = dashboard.getByText('Unlocked');
    const openStatus = dashboard.getByText('Open');

    const lockBtn = dashboard.getByText('Lock Gate');
    const openBtn = dashboard.getByText('Close Gate');

    expect(lockBtn.disabled).toBe(true);
    expect(openBtn.disabled).toBe(false)
})

it('Gate opens', () => {
    const { getByText, findByText } = render(<Dashboard />);
    fireEvent.click(getByText("Close Gate"));
    findByText(/Open Gate/i);
});


it('gate cannot be closed or opened if it is locked', () => {
    const dashboard = render(<Dashboard />);

    const closeBtn = dashboard.getByText('Close Gate');
    fireEvent.click(closeBtn);

    const lockBtn = dashboard.getByText('Lock Gate');
    fireEvent.click(lockBtn);

    const openBtn = dashboard.getByText('Open Gate');
    fireEvent.click(openBtn);
})


