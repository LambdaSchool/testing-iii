// Test away!
import React from "react"
import {render, fireEvent} from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("the display component", () => {
   it("renders the display", () => {
      render(<Controls />)
   });

   it("unlocks gate on click", () => {
      const {getByText, getByTestId} = render (<Controls />);

      const button = getByText(/lock gate/i);
      fireEvent.click(button);

      getByText(/unlock gate/i)
   });
});