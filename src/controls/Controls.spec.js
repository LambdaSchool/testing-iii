// Test away!

import React from 'react'
import ReactDOM from 'react-dom'
import {cleanup, render, fireEvent, wait, waitForElement} from 'react-testing-library'

import Controls from './Controls'

afterEach(cleanup)


describe('The Dashboard Component', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Controls />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('default to Lock Gate', () => {
        const component = render(<Controls />)
        component.getByText('Lock Gate')
    })

    it('default to Open Gate', () => {
        const component = render(<Controls />)
         component.getByText('Close Gate')
    })
  
  
  })