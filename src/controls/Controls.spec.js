// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


import Controls from "../controls/Controls";

describe('<Controls />', () => {

       it("provide buttons to toggle the closed and locked states.", () => {
        let wrapper1 = rtl.render(<Controls closed={true} locked={true} />);
        // const {queryByText} = wrapper1
        // console.log(wrapper1.getByName())
        let btn = wrapper1.container.lastElementChild.querySelector("button");
        // console.log("rrrrr: ",   queryByText("closed")) 
        // console.log("bbbb: ", wrapper1.container.lastElementChild.querySelector("button").className)
        // console.log("8888: ", rtl.fireEvent.click(btn))
        expect(rtl.fireEvent.click(btn)).toBeTruthy()
        expect(btn.className).toBe("toggle-btn");
        expect(wrapper1).toBeTruthy();
    });
});