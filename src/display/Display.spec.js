import React from "react";
import { render } from 'react-testing-library';
import Display from "./Display";
import "react-testing-library";


it("display shows  green", () => {
    const display = render(<Display closed ={false} locked={false}/>);
    const lockState = display.getByText('Unlocked');
    const openState = display.getByText("Open");
    expect(lockState.className).toBe('led green-led');
    expect(openState.className).toBe('led green-led');
})
