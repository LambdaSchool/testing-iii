import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "react-testing-library";

 import Dashboard from "./Dashboard";
describe("<Dashboard/>", () => {
  it("renders test", () => {
 
    render(<Dashboard />);
  });
  it("snapshot match", () => {
    const tree = renderer.create(<Dashboard />); 
  
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
