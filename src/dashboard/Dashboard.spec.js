// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls'


describe("Dashboard Testing", () => {
    it('Default control and display is rendering', () =>{
        const { getByText } = render(<Dashboard />);
        //Unlocked Open Lock Gate Close Gate
        expect(getByText("Unlocked"));
        expect(getByText("Open"));
        expect(getByText("Lock Gate"));
        expect(getByText("Close Gate"));        
    });
})