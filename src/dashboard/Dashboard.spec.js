/**shows the controls and display */
import React from "react"
import {render, fireEvent, cleanup} from "react-testing-library";

import Dashboard from "./Dashboard";
import Display from "../display/Display";
import Controls from "../controls/Controls";

afterEach(cleanup);
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


   describe("button click actions", () => {
      it("unlocks gate on button click", () => {
         const {getByText} = render(<Dashboard locked={true} closed={true}/>);
   
         //unlock gate button
         const button = getByText(/unlock/i);
         fireEvent.click(button);

         //text change
         getByText(/lock/i);
         getByText(/open/i);
      });
      it("locks gate on button click", () => {
         const {getByText} = render(<Dashboard locked={false} closed={true}/>);
   
      //lock gate
         const button = getByText(/lock/i);
         fireEvent.click(button);
         
      //text change
         getByText(/unlock/i);
      });
      it("close gate on click", () => {
         const {getByText} = render(<Dashboard locked={false} closed={false}/>);
      
      //close gate
         const button = getByText(/close/i);
         fireEvent.click(button);

      //text change
         getByText(/open/i);
         getByText(/lock/i);
      });
      it("open gate on click", () => {
         const {getByText} = render(<Dashboard locked={true} closed={true}/>);
      
      //close gate
         const button = getByText(/open/i);
         fireEvent.click(button);

      //text change
         getByText(/close/i);
      });
   });
});