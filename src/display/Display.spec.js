// Test away!
import React from "react";
import Display from './Display'

// import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";


afterEach(rtl.cleanup);

test("Render Display", () => {
    expect(render(<Display />)).toMatchSnapshot();
})

test('')