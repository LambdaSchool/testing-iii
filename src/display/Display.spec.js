// 1 displays if gate is open/closed and if it is locked/unlocked
// 1 displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// 1 displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// 1 when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

import {render, getAllByTestId} from "react-testing-library";
import React from "react"; 
import "jest-dom/extend-expect";
import Display from "./Display";

describe("display 'open' display", () => {
  it("is red-led while locked", () => {
    const component = render(<Display closed={true} locked={true} />);
    const display = component.getByText("Locked");

     expect(display).toHaveClass("red-led");
});
it("display 'Closed' display", () => {
  const component = render(<Display closed={true} locked={false} />);
  const display = component.getByText("Unlocked");

   expect(display).toHaveClass("green-led");
});
it("display 'Locked' while locked", () => {
  const component = render(<Display closed={true} locked={true} />);
  component.getByText("Locked");
});

describe("the display light test", () => {

  it("display red-light while closed", () => {
    const component = render(<Display closed={true} locked={false} />);
    const display = component.getByText("Closed");

     expect(display).toHaveClass("red-led");
});
it("display green-light while closed", () => {
  const component = render(<Display closed={false} locked={false} />);
  const display = component.getByText("Open");

   expect(display).toHaveClass("green-led");
});
  });

});
