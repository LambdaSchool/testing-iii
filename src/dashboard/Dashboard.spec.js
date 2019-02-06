// Test away

import React from 'react'
import ReactDOM from 'react-dom'
import {cleanup, render,fireEvent,wait,waitforElement} from 'react-testing-library'
import 'jest-dom/extend-expect'
import Dashboard from './Dashboard.js'

afterEach(cleanup)


describe('The Dashboard Component', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Dashboard />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it ('displays Close Gate/Open Gate When Clicked', () => {
        const component = render(<Dashboard />);

        const CLOSEGATE = component.getByText('Close Gate')
        const CLOSE = component.getByText('Open')
        const LOCKGATE = component.getByText('Lock Gate')

        expect(LOCKGATE).toBeDisabled()

        fireEvent.click(CLOSEGATE)
        expect(CLOSEGATE.innerHTML).toBe('Open Gate')
        expect(CLOSE.innerHTML).toBe('Closed')

        fireEvent.click(CLOSEGATE)
        expect(CLOSEGATE.innerHTML).toBe('Close Gate')

    })

    it ('displays Close Gate/Open Gate When Clicked', () => {
        const component = render(<Dashboard />);

        const CLOSEGATE = component.getByText('Close Gate')
        const UNLOCK = component.getByText('Unlocked')
        const LOCKGATE = component.getByText('Lock Gate')

        fireEvent.click(CLOSEGATE)
        fireEvent.click(LOCKGATE)

        expect(UNLOCK.innerHTML).toBe('Locked')
        expect(LOCKGATE.innerHTML).toBe('Unlock Gate')
        expect(CLOSEGATE).toBeDisabled()


    })
  
  
  })