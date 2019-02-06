// Test away
import {render, getAllByTestId, fireEvent} from "react-testing-library";
import React from "react"; 
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

describe("components rendering properly", () => {
    it ("renders Controls", () => {
        const component = render(<Dashboard />);

        component.getByText("Lock Gate");
        component.getByText("Close Gate");
    });
    it ("renders Display", () => {
        const component = render(<Dashboard />);
        
        component.getByText("Unlocked");
        component.getByText("Open");
    });
});

describe("click functions", () => {
    it("closes gate with toggleClosed function", () => {
        const component = render(<Dashboard />);
        const button = component.getByText("Close Gate");

        fireEvent.click(button);
        component.getByText("Closed");
    });
    it("opens gate with toggleClosed function", () => {
        const component = render(<Dashboard />);
        const button = component.getByText("Close Gate");

        fireEvent.click(button);
        fireEvent.click(button);
        component.getByText("Open");
    });
    it("locks gate with toggleLocked function", () => {
        const component = render(<Dashboard />);
        const button = component.getByText("Lock Gate");

        fireEvent.click(button);
        component.getByText("Locked");
    });
    it("unlocks gate with toggleLocked function", () => {
        const component = render(<Dashboard />);
        const button = component.getByText("Lock Gate");

        fireEvent.click(button);
        fireEvent.click(button);
        component.getByText("Unlocked");
    });
});