import React from 'react';
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect';
import Controls from './Controls';
afterEach(cleanup)

/* provide buttons to toggle the closed and locked states.
buttons' text changes to reflect the state the door will be in if clicked
the closed toggle button is disabled if the gate is closed
the locked toggle button is disabled if the gate is open */
describe('controls function tests', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });
    test('provide buttons to toggle the closed and locked states buttons text changes to reflect the state the door will be in if clicked', () => {
        const { getByText } = render(<Controls locked={true} />);
        getByText('Unlock Gate');
    });
    test('provide buttons to toggle the closed and locked states buttons text changes to reflect the state the door will be in if clicked', () => {
        const { getByText } = render(<Controls locked={false} />);
        getByText('Lock Gate');
    });
    test('provide buttons to toggle the closed and locked states buttons text changes to reflect the state the door will be in if clicked', () => {
        const { getByText } = render(<Controls closed={true} />);
        getByText('Open Gate');
    });
    test('provide buttons to toggle the closed and locked states buttons text changes to reflect the state the door will be in if clicked', () => {
        const { getByText } = render(<Controls closed={false} />);
        getByText('Close Gate');
    });
    test('the closed toggle button is disabled if the gate is closed', () => {
        const { getByTestId } = render(<Controls locked={true} />);
        const closeButton = getByTestId('openCloseButton');
        expect(closeButton.disabled).toBe(true)
        

    });
    test('the locked toggle button is disabled if the gate is open', () => {
        const { getByText } = render(<Controls closed={false} />);
        const openButton = getByText('Lock Gate');
        expect(openButton.disabled).toBe(true)
        

    });
})