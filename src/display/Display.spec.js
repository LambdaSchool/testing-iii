// Test away!
import React from "react";
import Display from "./display";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";
afterEach(rtl.cleanup);
import * as rtl from "react-testing-library";
import { render, fireEvent } from "@testing-library/react";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
  it("defaults to unlocked and open", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);
    expect(unlocked).toHaveTextContent(/unlocked/i);
    expect(open).toHaveTextContent(/open/i);
  });
});
