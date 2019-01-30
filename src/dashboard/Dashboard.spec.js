// Test away
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './dashboard'
describe('<Dashboard />',()=>{
    describe('test if renders', ()=>{
        const { getByTestId, getByText } = render(<Dashboard />)
        const lockStatus = getByTestId('lockStatus')
        const gateStatus = getByTestId('gateStatus')
        const gateButton = getByTestId('gate')
        const lockButton = getByTestId('lock')
        it('renders lock', ()=>{
            expect(lockStatus).toHaveTextContent(/unlocked/i)
        })
        it ('renders gate', () => {
            expect (gateStatus).toHaveTextContent (/open/i);
        });

        it('Gate button works properly', ()=>{
            fireEvent.click(gateButton)
            expect(gateStatus).toHaveTextContent(/closed/i)
        })
        it ('Lock button renders', () => {
            fireEvent.click (gateButton);
            fireEvent.click(lockButton)
            expect (lockStatus).toHaveTextContent (/locked/i);
        });
    })
    describe ('test if buttons correctly disable', () => {
        const {getByTestId, getByText} = render (<Dashboard />);
        const lockStatus = getByTestId ('lockStatus');
        const gateStatus = getByTestId ('gateStatus');
        const gateButton = getByTestId ('gate');
        const lockButton = getByTestId ('lock');
        it ('Lock button is disabled', () => {
            expect (lockButton).toBeDisabled()
        });
        it ('Lock button is disabled', () => {
            fireEvent.click (gateButton);
            fireEvent.click (lockButton);
            expect (gateButton).toBeDisabled ();
        });

    });
    describe ('test if buttons correctly reenables', () => {
        const {getByTestId, getByText} = render (<Dashboard />);
        const gateStatus = getByTestId ('gateStatus');
        const lockStatus = getByTestId ('lockStatus');
        const lockButton = getByTestId ('lock');
        const gateButton = getByTestId ('gate');
        it ('Lock button is not disabled', () => {
            fireEvent.click(gateButton)
            expect (lockButton).not.toBeDisabled ();
        });
        it ('gate button is not disabled', () => {            
            fireEvent.click(lockButton)
            fireEvent.click (gateButton);
            fireEvent.click (lockButton);
            expect (gateButton).not.toBeDisabled ();
        });

    });
    describe ('test if classes get swapped', () => {
        const {getByTestId, getByText} = render (<Dashboard />);
        const gateStatus = getByTestId ('gateStatus');
        const lockStatus = getByTestId ('lockStatus');
        const lockButton = getByTestId ('lock');
        const gateButton = getByTestId ('gate');
        it ('Lock button is green on render', () => {
            expect (lockStatus).toHaveClass('green-led')
        });
        it ('gate button is green on render', () => {
            expect (gateStatus).toHaveClass ('green-led');
        });
        it('closed gate is red',()=>{
            fireEvent.click(gateButton)
            expect(gateStatus).toHaveClass('red-led')
        })
        it ('locked gate is red', () => {
            fireEvent.click (lockButton);
            expect (lockStatus).toHaveClass ('red-led');
        });

    });
    

})