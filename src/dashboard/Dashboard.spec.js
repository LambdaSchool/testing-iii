// Test away
import React from 'react';
import 'jest-dom/extend-expect';
import {render, fireEvent} from 'react-testing-library';

import Dashboard from './Dashboard.js';
import Display from '../display/Display.js';
import Controls from '../controls/Controls.js';

const app = render(<Dashboard />);
const displayComponent = render(<Display />);
const controlsComponent = render(<Controls />);

describe('whole app tests', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    });
})

describe('sub-component tests', () => {
    it('shows control & display components', () => {
        render(<Display />);
        render(<Controls />);
    });
});
 
const openCloseDisplay = displayComponent.getByText(/open/i);
const closeOpenButton = controlsComponent.getByText(/close gate/i);
const lockUnlockDisplay = displayComponent.getByText(/unlocked/i);
const lockUnlockButton = controlsComponent.getByText(/lock gate/i);
describe('step by step functionality of app', () => {
    test('lock button doesnt work yet cause gate still open', () => {
        expect(lockUnlockDisplay).toHaveClass('led green-led');
        expect(lockUnlockDisplay).toHaveTextContent(/^unlocked$/i);
        expect(lockUnlockButton).toHaveTextContent(/^lock gate$/i);
        fireEvent.click(lockUnlockButton);
        expect(lockUnlockDisplay).not.toHaveClass('led red-led');
        expect(lockUnlockDisplay).not.toHaveTextContent(/^locked$/i);
        expect(lockUnlockButton).not.toHaveTextContent(/^unlock gate$/i);
    })
    test('open/close display & button toggles properly', () => {
        expect(openCloseDisplay).toHaveClass('led green-led');
        expect(openCloseDisplay).toHaveTextContent(/^open$/i);
        expect(closeOpenButton).toHaveTextContent(/^close gate$/i);
        expect(closeOpenButton).toHaveClass('toggle-btn');
        fireEvent.click(closeOpenButton);
        expect(openCloseDisplay).toHaveClass('led red-led');
        expect(openCloseDisplay).toHaveTextContent(/^closed$/i);
        expect(closeOpenButton).toHaveTextContent(/^open gate$/i);
    })
    test('lock/unlocked display & button toggles properly', () => {
        expect(lockUnlockDisplay).toHaveClass('led green-led');
        expect(lockUnlockDisplay).toHaveTextContent(/^unlocked$/i);
        expect(lockUnlockButton).toHaveTextContent(/^lock gate$/i);
        expect(lockUnlockButton).toHaveClass('toggle-btn');
        fireEvent.click(lockUnlockButton);
        expect(lockUnlockDisplay).toHaveClass('led red-led');
        expect(lockUnlockDisplay).toHaveTextContent(/^locked$/i);
        expect(lockUnlockButton).toHaveTextContent(/^unlock gate$/i);
    })
    test('open button doesnt work cause gate is locked', () => {
        expect(openCloseDisplay).toHaveClass('led red-led');
        expect(openCloseDisplay).toHaveTextContent(/^closed$/i);
        expect(closeOpenButton).toHaveTextContent(/^open gate$/i);
        fireEvent.click(closeOpenButton);
        expect(openCloseDisplay).not.toHaveClass('led green-led');
        expect(openCloseDisplay).not.toHaveTextContent(/^open$/i);
        expect(closeOpenButton).not.toHaveTextContent(/^close gate$/i);
    })
})


