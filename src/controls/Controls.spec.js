// Test away!
import React from "react";
import Controls from './Controls';

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Render the Control Panel", async () => {
    const wrapper = rtl.render(<Controls />);
    await wrapper.findAllByText(/controls panel/i);
    
    const element = wrapper.getByText(/controls panel/i);

    expect(element).toBeVisible();
});

test('Toggle Button', async () => {
    const wrapper = rtl.render(<Controls />);
    await wrapper.findByLabelText(/btn/i);

    const open = wrapper.getByText(/open/i)
    const closed = wrapper.getByText(/closed/i)
    const lock = wrapper.getByText(/lock/i)
    const unlocked = wrapper.getByText(/unlocked/i)

    rtl.act(() => {
        rtl.fireEvent.click(open)
    })
        rtl.act(() => {
            rtl.fireEvent.click(closed)
        })
            rtl.act(() => {
                rtl.fireEvent.click(lock)
            })
                rtl.act(() => {
                    rtl.fireEvent.click(unlocked)
    })

    expect(wrapper.queryByAllText(/btn/i)).toBeNull()
})