// Test away
import { render } from "@testing-library/react";
import React from "react";
import Display from "../display/Display";
import Controls from "../controls/Controls";
test("Renders display?", () => {
  let props = {
    locked: false,
    closed: false
  };
  render(<Display {...props} />);

  props = {
    locked: false,
    closed: false,
    toggleLocked: () => [],
    toggleClosed:() => []
  };

  render(<Controls {...props} />);
});
