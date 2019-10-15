// Test away!
import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import Controls from './Controls';


describe("Controls Test", () => {
    it("Button opens while unlocked", () => {
        const mock = jest.fn();
        const { queryByText } = render(<Controls locked={false} closed={false} toggleClosed={mock} />)
        const lock = queryByText("Lock Gate");
        const close = queryByText("Close Gate");expect(lock.disabled).toBe(true);
        expect(close.disabled).toBe(false);
        fireEvent.click(close);
        expect(mock).toBeCalled()
    });
    
    it("Button closes while unlocked", () =>{
        const mock = jest.fn();
        const { queryByText } = render(<Controls locked={false} closed={true} toggleClosed={mock} />);
        const lock = queryByText("Lock Gate");
        const open = queryByText("Open Gate");expect(lock.disabled).toBe(true);
        expect(open.disabled).toBe(false);
        fireEvent.click(open);
        expect(mock).toBeCalled();
    });

    it("Button is locked", () =>{
        const mock = jest.fn();
        const { queryByText } = render(<Controls locked={true} closed={true} toggleLocked={mock} />)
        const unlock = queryByText("Unlock Gate");
        const open = queryByText("Open Gate");
        expect(unlock.disabled).toBe(false);
        expect(open.disabled).toBe(false);
        fireEvent.click(unlock);
        expect(mock).toBeCalled();
    })
})
