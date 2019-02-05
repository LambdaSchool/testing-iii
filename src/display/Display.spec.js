// Test away!
import React from "react"
import {render} from "react-testing-library";

import Display from "./Display";

describe("the display component", () => {
   it("renders the display", () => {
      render(<Display />)
   });
});