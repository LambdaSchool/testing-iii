// Test away!

// Test away

import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from './Display/';
import Controls from "../controls/Controls";

describe('<Display />', () => {
    let wrapper1 = rtl.render(<Display />);
    let wrapper2 = rtl.render(<Controls />);
  it("should displays Unlocked if gate is Locked", () => {
    
    expect(wrapper1.queryByText(/Unlocked/i)).toBeInTheDocument();
    // expect(wrapper.queryByText(/Closed/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper2.queryByText(/Lock Gate/i));
    expect(wrapper1.queryByText(/Locked/i)).toBeInTheDocument();
    // rtl.fireEvent.click(wrapper.queryByText(/Unlock Gate/i));
  });
});
