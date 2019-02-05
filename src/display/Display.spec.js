/**displays if gate is open/closed and if it is locked/unlocked
displays 'Closed' if the closed prop is true and 'Open' if otherwise
displays 'Locked' if the locked prop is true and 'Unlocked' if othewise
when locked or closed use the red-led class
when unlocked or open use the green-led class */
import React from "react"
import {render, cleanup} from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

afterEach(cleanup);
describe("the display component", () => {
   it("renders the display", () => {
      render(<Display />)
   });
   it("displays 'Closed' if the closed prop is true", () => {
      const {getByText} = render(<Display closed={true}/>);
      getByText(/closed/i)

   //check for red class
      const div = getByText(/closed/i);
      expect(div).toHaveClass("red-led");
   });
   it("displays 'open' if the closed prop is false", () => {
      const {getByText} = render(<Display closed={false}/>);
      getByText(/open/i);

   //check for green class
      const div = getByText(/open/i);
      expect(div).toHaveClass("green-led");
   });
   it("displays 'Locked' if the locked prop is true", () => {
      const {getByText} = render(<Display locked={true}/>);
      getByText(/locked/i)

   //check for red class
      const div = getByText(/locked/i);
      expect(div).toHaveClass("red-led");
   });
   it("displays 'unlocked' if the closed prop is false", () => {
      const {getByText} = render(<Display locked={false}/>);
      getByText(/unlocked/i)

   //check for green class
      const div = getByText(/unlocked/i);
      expect(div).toHaveClass("green-led");
   });
});