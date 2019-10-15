// Test away!
import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import Display from './Display';



describe("Display when gate is open or closed", () =>{
    it("Default Display", () => {
        const { getByText } = render(<Display />);
        expect(getByText("Unlocked"));
        expect(getByText("Open"));
    })
    it("When Gate is closed", () => {
        const { getByText } = render(<Display closed={true} />);
        expect(getByText("Unlocked"));
        expect(getByText("Closed"));
    })
    it("When Gate is closed and locked", () => {
        const { getByText } = render(<Display closed={true} locked={true}/>);
        expect(getByText("Locked"));
        expect(getByText("Closed"));
    })
})
