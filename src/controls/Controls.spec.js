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
   afterEach(cleanup);
   describe("general rendering", () => {
      it("renders the display", () => {
         render(<Controls />)
      });
      it("defaults to open and unlocked", () => {
         const {getByText} = render(<Controls />);
   
         getByText(/close/i)
         getByText(/lock/i)
      });
   })
   describe("standard view of UI", () => {
      it("locked and closed gate", () => {
         const {getByText} = render(<Controls locked={true} closed={true}/>);

         getByText(/unlock/i);

      //test disable toggle for open button
         const button = getByText(/open/i);
         expect(button.disabled).toEqual(true);
      });
      it("unlocked and closed gate", () => {
         const {getByText} = render(<Controls locked={false} closed={true}/>);

         getByText(/lock/i);
         getByText(/open/i);
      })
      it("open gate", () => {
         const {getByText} = render(<Controls locked={false} closed={false}/>);

         getByText(/close/i);
      
      //test disable for lock button
         const button = getByText(/lock/i);
         expect(button.disabled).toEqual(true);
      })
   })
   describe("button click actions", () => {
      it("unlocks gate on button click", () => {
         const {getByText} = render(<Controls locked={true} closed={true}/>);
   
         //unlock gate button
         const button = getByText(/unlock/i);
         fireEvent.click(button);

         //text change
         getByText(/lock/i);
         getByText(/open/i);
      });
      it("locks gate on button click", () => {
         const {getByText} = render(<Controls locked={false} closed={true}/>);
   
      //lock gate
         const button = getByText(/lock/i);
         fireEvent.click(button);
         
      //text change
         getByText(/unlock/i);
      });
      it("close gate on click", () => {
         const {getByText} = render(<Controls locked={false} closed={false}/>);
      
      //close gate
         const button = getByText(/close/i);
         fireEvent.click(button);

      //text change
         getByText(/open/i);
         getByText(/lock/i);
      });
      it("open gate on click", () => {
         const {getByText} = render(<Controls locked={true} closed={true}/>);
      
      //close gate
         const button = getByText(/open/i);
         fireEvent.click(button);

      //text change
         getByText(/close/i);
      });
   });
});