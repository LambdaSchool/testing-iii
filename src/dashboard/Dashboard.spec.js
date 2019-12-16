import React from "react";
import * as rtl from "@testing-library/react";
import {fireEvent, render} from "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

// Test away
// testing control/dashboard panel display 


test("Render Parent Snapshot", async () => {
    const wrapper = rtl.render(<Dashboard />);
   expect(wrapper).toBeDefined();
   expect(wrapper.asFragment()).toMatchSnapshot();

})

test("renders Display", async () => {
    const wrapper = rtl.render(<Dashboard />);
    await wrapper.findByText(/unlocked/i);
    const lockButton = wrapper.getByText(/locK gate/i);
    const openButton = wrapper.getByText(/close gate/i);

    expect(lockButton.disabled).toBe(true);
    expect(openButton.disabled).toBe(false);

})


