// Test away!

// Test away

import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


import Display from './Display/';
import Controls from "../controls/Controls";

describe('<Display />', () => {

    it("should display if gate is open/closed and if it is locked/unlocked", () => {
        let wrapper1 = rtl.render(<Display />);
        let wrapper2 = rtl.render(<Controls />);
        expect(wrapper1.queryByText(/Unlocked/i)).toBeInTheDocument();
        rtl.fireEvent.click(wrapper2.queryByText(/Lock Gate/i));
        expect(wrapper1.queryByText(/Locked/i)).toBeInTheDocument();
        // expect(wrapper1.queryByText(/UnLocked/i)).not.toBeInTheDocument();
    });

    it("should displays 'Closed' if the closed prop is true", () => {
        let wrapper1 = rtl.render(<Display closed={true} />);
        expect(wrapper1.queryByText(/Closed/i)).toBeInTheDocument();
    });
    it("should displays 'Open' if the closed prop is false", () => {
        let wrapper1 = rtl.render(<Display closed={false} />);
        expect(wrapper1.queryByText(/Open/i)).toBeInTheDocument();
    });
    it("should displays 'Locked' if the locked prop is true", () => {
        let wrapper1 = rtl.render(<Display locked={true} />);
        expect(wrapper1.queryByText(/Locked/i)).toBeInTheDocument();
    });
    it("should displays 'Unlocked' if the locked prop is false", () => {
        let wrapper1 = rtl.render(<Display locked={false} />);
        expect(wrapper1.queryByText(/Locked/i)).toBeInTheDocument();
    });
    it("when unlocked or open use the green-led class", () => {
        let wrapper1 = rtl.render(<Display />);
        let expected = wrapper1.container.firstChild.firstChild.childNodes[0].textContent;
        let actual = wrapper1.container.firstChild.firstChild.classList[1];
        // console.log("aaaa: ", wrapper1.container.firstChild.firstChild.classList[1]);
        // console.log("bbbb: ", wrapper1.container.firstChild.firstChild.childNodes[0].textContent)
        expect(actual).toEqual("green-led");
        expect(expected).toEqual("Unlocked");
       
        

    });


});
