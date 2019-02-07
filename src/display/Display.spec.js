// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Display from "./Display.js";
import Dashboard from "../dashboard/Dashboard";

describe("The Display Component", () => {
  afterEach(cleanup);
  test("green-led on start", () => {
    const component = render(<Display className="green-led" />);
    const closed = component.getByTestId("unlocked");
    expect(closed).toHaveClass("green-led");
  });

  test("unlocked on start", () => {
    const component = render(<Display className="green-led" />);
    const locked = component.getByTestId("closed");
    expect(locked).toHaveClass("green-led");
  });

  test("red-led and closed", () => {
    const component = render(<Display closed={true} />);
    const closed = component.getByTestId("closed");
    expect(closed).toHaveTextContent(/closed/i);
    expect(closed).toHaveClass("red-led");
  });
  test("green-led and open", () => {
    const component = render(<Dashboard closed={false} />);
    const closed = component.getByTestId("closed");
    expect(closed).toHaveTextContent(/open/i);
    expect(closed).toHaveClass("green-led");
  });
  test("locked text visible", () => {
    const component = render(<Display locked={true} />);
    const locked = component.getByTestId("unlocked");
    expect(locked).toHaveTextContent(/locked/i);
    expect(locked).toHaveClass("red-led");
  });
  test("unlocked text visible", () => {
    const component = render(<Display locked={false} />);
    const locked = component.getByTestId("unlocked");
    expect(locked).toHaveTextContent(/unlocked/i);
    expect(locked).toHaveClass("green-led");
  });
});
