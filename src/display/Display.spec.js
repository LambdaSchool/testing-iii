// Test away!

import React from 'react'
import ReactDOM from 'react-dom'
import {cleanup, render, fireEvent, wait, waitforElement} from 'react-testing-library'
import Display from './Display.js'

afterEach(cleanup)

describe('The Display Component', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Display />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('defaults to unlocked', () => {
        const component = render(<Display />)
        
       component.getByText('Unlocked')
      });

      it('defaults to open', () => {
        const component = render(<Display />)
        
       component.getByText(/open/i)
      });
})