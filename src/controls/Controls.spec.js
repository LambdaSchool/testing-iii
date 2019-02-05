/**defaults to unlocked and open
cannot be closed or opened if it is locked 

provide buttons to toggle the closed and locked states.
buttons' text changes to reflect the state the door will be in if clicked
the closed toggle button is disabled if the gate is closed
the locked toggle button is disabled if the gate is open
*/
import React from "react"
import {render, fireEvent, cleanup} from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(cleanup);
describe("the display component", () => {
   it("renders the display", () => {
      render(<Controls />)
   });
   it("closes gate on click", () => {
      const {getByText, getByTestId} = render (<Controls />);

      const button = getByText(/close gate/i);
      fireEvent.click(button);
   
   //buttons should change to this
      getByText(/lock gate/i)
      // getByText(/open gate/i)
   });
   
});