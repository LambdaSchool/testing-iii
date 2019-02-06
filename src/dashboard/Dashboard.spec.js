// Test away
import React from "react";
import { render, cleanup } from "react-testing-library";

import Dashboard from "../dashboard/Dashboard";
import Display from "../display/Display";

describe("Dashboard component", () => {
  afterEach(cleanup);

  it("renders the dashboard component", () => {
    render(<Dashboard />);
  });

  it("dashboard renders a Display component", () => {
    render(<Display />);
  });
});
