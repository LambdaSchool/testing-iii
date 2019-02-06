// Test away!
import {render, getAllByTestId} from "react-testing-library";
import React from "react"; 
import "jest-dom/extend-expect";
import Display from "./Display";

describe("the 'locked' display", () => {
    it("is red while locked", () => {
        const component = render(<Display closed={true} locked={true} />);
        const display = component.getByText("Locked");

        expect(display).toHaveClass("red-led");
    });
    it("is green while unlocked", () => {
        const component = render(<Display closed={true} locked={false} />);
        const display = component.getByText("Unlocked");

        expect(display).toHaveClass("green-led");
    });
    it("says 'Locked' while locked", () => {
        const component = render(<Display closed={true} locked={true} />);
        component.getByText("Locked");
    });
    it("says 'Unlocked' while unlocked", () => {
        const component = render(<Display closed={true} locked={false} />);
        component.getByText("Unlocked");
    });
});

describe("the 'closed' display", () => {
    it("is red while closed", () => {
        const component = render(<Display closed={true} locked={false} />);
        const display = component.getByText("Closed");

        expect(display).toHaveClass("red-led");
    });
    it("is green while open", () => {
        const component = render(<Display closed={false} locked={false} />);
        const display = component.getByText("Open");

        expect(display).toHaveClass("green-led");
    });
    it("says 'Closed' while closed", () => {
        const component = render(<Display closed={true} locked={false} />);
        component.getByText("Closed");
    });
    it("says 'Open' while open", () => {
        const component = render(<Display closed={false} locked={false} />);
        component.getByText("Open");
    });
});