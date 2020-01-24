// Test away
import React from "react";
import * as rtl from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

// rtl.afterEach(cleanup);

it("renders gate state", () => {
  const wrapper = render(<Display locked={locked} closed={closed} />);

  expect(queryByLabelText(/closed/i)).toBeTruthy();

  expect(queryByLabelText(/locked/i)).toBeTruthy();
});
