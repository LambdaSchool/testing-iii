// Test away
import React from "react";
import  Dashboard from './Dashboard';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

test('Is locked', async () => {
    const wrapper = rtl.render(<Dashboard /> );
    await wrapper.findAllByText(/locked/i);

    const locked = wrapper.getByText(/locked/i)

    rtl.act(() => {
        rtl.fireEvent.click(locked)
    })

    expect(wrapper.queryByText(/locked/i)).toBeNull()
})

test('Is closed', async () => {
    const wrapper = rtl.render(<Dashboard />);
    await wrapper.findAllByText(/closed/i);

    const closed = wrapper.getByText(/closed/i)

    rtl.act(() => {
        rtl.fireEvent.click(closed)
    })

    expect(wrapper.queryByText(/closed/i)).toBeNull()
})

