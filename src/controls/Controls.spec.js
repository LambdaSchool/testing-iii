// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is closed
// - the locked toggle button is disabled if the gate is open

import React from "react"; 

import  {render } from "react-testing-library";

import "jest-dom/extend-expect";

import Controls from "./Controls";

 describe("the lock button", () => {
    it("is disabled while gate is open", () => {
        const component = render(<Controls closed={false} locked={false} />);
        const button = component.getByText("Lock Gate");

         expect(button).toBeDisabled();
    });
 
    it("display 'unlocked' while gate is unlocked", () => {
        const component = render(<Controls closed={true} locked={false} />);

         component.getByText("Lock Gate");
    });
    it("display 'locked'", () => {
        const component = render(<Controls closed={true} locked={true} />);

         component.getByText("Unlock Gate");
    });
});

 describe("the unlocked button", () => {
 
    it("is enabled while gate is unlocked", () => {
        const component = render(<Controls closed={true} locked={false} />);
        const button = component.getByText("Open Gate");

         expect(button).not.toBeDisabled();
    });
    it("display 'open' while gate is closed", () => {
        const component = render(<Controls closed={true} locked={false} />);

         component.getByText("Open Gate");
    });
    it("display 'close' while gate is open", () => {
        const component = render(<Controls closed={false} locked={false} />);

         component.getByText("Close Gate");
    });
})