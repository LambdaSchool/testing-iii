// Test away!
import {render, getAllByTestId} from "react-testing-library";
import React from "react"; 
import "jest-dom/extend-expect";
import Controls from "./Controls";

describe("the lock button", () => {
    it("is disabled while gate is open", () => {
        const component = render(<Controls closed={false} locked={false} />);
        const button = component.getByText("Lock Gate"); 
        
        expect(button).toBeDisabled();
    });
    it("is enabled while gate is closed", () => {
        const component = render(<Controls closed={true} locked={true} />);
        const button = component.getByText("Unlock Gate");
        
        expect(button).not.toHaveAttribute("disabled");
        //test is seeing button as disabled even when closed=true, despite working as expected in the browser
    });
    it("says 'lock' while gate is unlocked", () => {
        const component = render(<Controls closed={true} locked={false} />);
        
        component.getByText("Lock Gate");
    });
    it("says 'unlock' while gate is locked", () => {
        const component = render(<Controls closed={true} locked={true} />);
        
        component.getByText("Unlock Gate");
    });
});

describe("the open button", () => {
    it("is disabled while gate is locked", () => {
        const component = render(<Controls closed={true} locked={true} />);
        const button = component.getByText("Open Gate");
        
        expect(button).toHaveAttribute("disabled"); 
        //test is seeing button as enabled even when locked=true, despite working as expected in the browser
    });
    it("is enabled while gate is unlocked", () => {
        const component = render(<Controls closed={true} locked={false} />);
        const button = component.getByText("Open Gate");
        
        expect(button).not.toBeDisabled();
    });
    it("says 'open' while gate is closed", () => {
        const component = render(<Controls closed={true} locked={false} />);
        
        component.getByText("Open Gate");
    });
    it("says 'close' while gate is open", () => {
        const component = render(<Controls closed={false} locked={false} />);
        
        component.getByText("Close Gate");
    });
});