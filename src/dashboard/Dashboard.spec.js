/**shows the controls and display */
import React from "react"
import {render} from "react-testing-library";

import Dashboard from "./Dashboard";
import Display from "../display/Display";
import Controls from "../controls/Controls";


describe("the dashboard component", () => {
   it("renders the dashboard", () => {
      render(<Dashboard />)
   });
   it("renders the display", () => {
      render(<Display />)
   });
   it("renders the controls", () => {
      render(<Controls />)
   });
});