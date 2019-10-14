// Test away!

// Test away

import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from './Display/';
import Controls from "../controls/Controls";

describe('<Display />', () => {

    it("should displays if gate is open/closed and if it is locked/unlocked", () => {
        let wrapper1 = rtl.render(<Display />);
        let wrapper2 = rtl.render(<Controls />);
        expect(wrapper1.queryByText(/Unlocked/i)).toBeInTheDocument();
        rtl.fireEvent.click(wrapper2.queryByText(/Lock Gate/i));
        expect(wrapper1.queryByText(/Locked/i)).toBeInTheDocument();
        // expect(wrapper1.queryByText(/UnLocked/i)).not.toBeInTheDocument();
    });

});
