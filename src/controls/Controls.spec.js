// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("closed button", () => {
  afterEach(cleanup);

  it("open button onload ", () => {
    const component = render(<Controls closed={false} locked={true} />);
    const closed = component.getByTestId("closed");

    expect(closed).toHaveTextContent(/close gate/i);
  });

  it("closed button text changes to open on click", () => {
    const component = render(<Controls closed={true} locked={false} />);
    const closed = component.getByTestId("closed");

    expect(closed).toHaveTextContent(/open gate/i);
  });

  it("closed toggle disabled if gate locked", () => {
    const component = render(<Controls closed={true} locked={true} />);
    const button = component.getByText(/open gate/i);

    expect(button).toBeDisabled();
  });
});

describe("locked button", () => {
  afterEach(cleanup);

  it("renders lock gate onload", () => {
    const component = render(<Controls closed={false} locked={false} />);
    const unlocked = component.getByTestId("unlocked");
    expect(unlocked).toHaveTextContent(/lock gate/i);
  });

  it("'lock gate' text changes to unlocked on click", () => {
    const component = render(<Controls closed={true} locked={true} />);
    const button = component.getByTestId("unlocked");

    expect(button).toHaveTextContent(/unlock gate/i);
  });

  it("locked toggle disabled if gate open", () => {
    const component = render(<Controls closed={false} locked={false} />);
    const button = component.getByText(/lock gate/i);

    expect(button).toBeDisabled();
  });
});
