// Test away!
import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import Controls from './Controls';


describe("Controls Test", () => {
    it("Button opens while unlocked", () => {
        const mock = jest.fn();
        const { queryByText } = render(<Controls locked={false} closed={false} toggleClosed={mock} />)
        const lockButton = queryByText("Lock Gate");
        expect(lockButton.disabled).toBe(true);
        const closeButton = queryByText("Close Gate")
        expect(closeButton.disabled).toBe(false);
        fireEvent.click(closeButton);
        expect(mock).toBeCalled()
    }) 
})
