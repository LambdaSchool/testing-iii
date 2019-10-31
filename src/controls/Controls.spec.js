// Test away!
import React from 'react';
import {render,fireEvent,cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls.js';


describe('Testing Controls Component', () => {
      
      test('It should render the  controls component', () => {
            render(<Controls />);
      });

      test('It should render the control buttons', () => {
             const component = render(<Controls />);
             const lockGate = component.getByText(/lock gate/i);
             const closeGate = component.getByText(/close gate/i);
             expect(lockGate).toBeDefined();
             expect(closeGate).toBeDefined();
      });

     test('It should execute the passed function when the close toggle is clicked', () => {
            const toggleClosed = jest.fn();
            const {getByText } = render(<Controls toggleClosed={toggleClosed} closed={false} />);
            const button = getByText(/close gate/i);
            fireEvent.click(button);
            expect(toggleClosed).toHaveBeenCalledTimes(1);
            
      });

      test('It should disable locked toggle button if the gate is open', () => {
            const mockFn = jest.fn();
            const { getByText } = render(<Controls toggleLocked={mockFn} closed={false} />);
            const button = getByText(/lock gate/i);

            expect(button).toBeDisabled();

            fireEvent.click(button);
            expect(mockFn).not.toHaveBeenCalled();
      })

      test('It should execute the passed function when the lock toggle is clicked', () => {
            const mockFn = jest.fn();
            const { getByText } = render(<Controls toggleLocked={mockFn} locked={false} />);
            const button = getByText(/lock gate/i);
            fireEvent.click(button);
            expect(mockFn).toHaveBeenCalledTimes(1);
            
      });
});