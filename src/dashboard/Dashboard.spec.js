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
  
  })