// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('render to initial state', () => {
        const { getByText } = render(<Dashboard />);
        let lockStatus = getByText('Unlocked');
        let lockCommand = getByText('Lock Gate');
        let gateStatus = getByText('Open');
        let gateCommand = getByText('Close Gate');

        expect(lockStatus.textContent).toBe('Unlocked');
        expect(lockCommand.textContent).toBe('Lock Gate');
        expect(gateStatus.textContent).toBe('Open');
        expect(gateCommand.textContent).toBe('Close Gate');
    });

    it('change lock status', () => {
        const { getByText } = render(<Dashboard />);
        let gateButton = getByText('Close Gate');

        fireEvent.click(gateButton);
        let gateStatus = getByText('Closed');
        gateButton = getByText('Open Gate');

        expect(gateStatus.textContent).toBe('Closed');
        expect(gateButton.textContent).toBe('Open Gate');

        fireEvent.click(gateButton);
        gateStatus = getByText('Open');
        gateButton = getByText('Close Gate');

        expect(gateStatus.textContent).toBe('Open');
        expect(gateButton.textContent).toBe('Close Gate');
    });

    it('change gate status', () => {
        const { getByText } = render(<Dashboard />);
        let gateButton = getByText('Close Gate');
        let lockButton = getByText('Lock Gate');

        fireEvent.click(gateButton);
        fireEvent.click(lockButton);

        let lockStatus = getByText('Locked');
        lockButton = getByText('Unlock Gate')

        expect(lockStatus.textContent).toBe('Locked');
        expect(lockButton.textContent).toBe('Unlock Gate');

        fireEvent.click(lockButton);
        lockStatus = getByText('Unlocked');
        lockButton = getByText('Lock Gate');

        expect(lockStatus.textContent).toBe('Unlocked');
        expect(lockButton.textContent).toBe('Lock Gate');
    });
})