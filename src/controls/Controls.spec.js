// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "../controls/Controls";

test("If locked, can't be opened or closed ", () => {
    const toggle = jest.fn();
    const { getByText } = render(
      <Controls locked={true} closed={true} toggle={toggle} />
    );
    const open = getByText(/open gate/i);
    fireEvent.click(open);
    expect(toggle).not.toHaveBeenCalled();
  });

  test("all buttons rendered.", () => {
    const { getAllByText } = render(<Controls />);
    const buttons = getAllByText(/gate/i);
    expect(buttons).toBeDefined();
  });

  test("if gate is locked, so i toggle button", () => {
    const Close = jest.fn();
    const { getByText } = render(<Controls locked={true} Close={Close} />);
    const closedButton = getByText(/close gate/i);
    fireEvent.click(closedButton);
    expect(Close).not.toHaveBeenCalled();
  });

  test("locked button disabled if gate open", () => {
    const Locked = jest.fn();
    const { getByText } = render(
      <Controls closed={false} Locked={Locked} />
    );
    const lockBtn = getByText(/lock gate/i);
    fireEvent.click(lockBtn);
    expect(Locked).not.toHaveBeenCalled();
  });