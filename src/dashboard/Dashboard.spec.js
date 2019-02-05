// Test away
import React from "react"
import {render} from "react-testing-library";

import Dashboard from "./Dashboard";

describe("the display component", () => {
   it("renders the display", () => {
      render(<Dashboard />)
   });
});