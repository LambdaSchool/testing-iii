import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from './Display';



// Test away!
// test lockedClass & closedClass functions 


test('Display: Renders', async () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper).toBeDefined();
    
})

test('Display: test state', async () => {
    const wrapper = rtl.render(<Display />);

    const lockedClass = wrapper.findAllByDisplayValue(/lockedClass/i);
    expect(lockedClass).toBeTruthy();
    const closedClass = wrapper.findAllByDisplayValue(/closedClass/i);
    expect(closedClass).toBeTruthy();
    
})

test('Display: closed & locked == false', async () => {
    const wrapper = rtl.render(<Display />);

    // in this case toBeTruthy == closed: false
    const closed = wrapper.findAllByDisplayValue(/closed/i);
    expect(closed).toBeTruthy();
    const locked = wrapper.findAllByDisplayValue(/locked/i);
    expect(locked).toBeTruthy();
    
})
