// Test away!
import React from 'react';
import Controls from './Controls';
import {render, cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('Controls renders without crashing.', () => {
    it('Renders the Controls component', () => {
        render(<Controls />)
    })
    it('Displays Lock Gate if the gate is unlocked', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />);
        getByText(/lock gate/i);
    })
    it('Displays Close Gate if the gate is open', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />);
        getByText(/close gate/i);
    })
    it('Displays Unlock Gate if the gate is locked', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        getByText(/unlock gate/i);
    })
    it('Displays Open Gate if the gate is closed', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        getByText(/open gate/i);
    })
    it('Will disable the Lock Gate button if the gate is open', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />)
        expect(getByText(/lock gate/i).disabled).toBe(true);
    })
    it('Will disable the Open Gate button if the gate is locked', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        expect(getByText(/open gate/i).disabled).toBe(true);
    })

});