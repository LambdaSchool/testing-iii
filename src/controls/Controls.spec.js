import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe('renders without crashing', () => {

  test('renders the Control component', () => {
    render(<Controls />)
  })

  test('provides buttons to toggle the closed and locked states', () => {

  })

  test('changes the button text when clicked, to reflect the state of the door', () => {

  })

  test('disables the closed toggle button when the gate is closed', () => {

  })

  test('it disables the locked toggle button when gate is open', () => {

  })

})
