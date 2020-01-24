// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(rtl.cleanup);

describe("control function", () => {
  it("expects default to unlocked", () => {});
  const wrapper = rtl.render(
    <button disabled={!closed} onClick={toggleLocked} className="toggle-btn">
      {locked ? "Unlock Gate" : "Lock Gate"}
    </button>
  );
  const element = wrapper.queryByText(/unlocked/i);

  expect(element).toBeTruthy();
});

it("expects default to be open if unlocked", () => {
  const wrapper = rtl.render(
    <button disabled={locked} onClick={toggleClosed} className="toggle-btn">
      {closed ? "Open Gate" : "Close Gate"}
    </button>
  );
  const element = wrapper.queryByText(/open/i);

  expect(element).toBeTruthy();
});
