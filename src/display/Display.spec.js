import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('renders without crashing', () => {

  test('renders the Display component', () => {
    render(<Display />)
  })

  test('displays if gate is open/closed', () => {

  })

  test('displays if gate is locked/unlocked', () => {

  })

  test('displays Closed if the closed prop is true', () => {

  })

  test('displays Open if the closed prop is false', () => {

  })

  test('displays Locked if the locked prop is true', () => {

  })

  test('displays Unlocked if the locked prop is false', () => {

  })

  test('uses the red-led class when locked or closed prop is true', () => {

  })

  test('uses the green-led class when locked or closed prop is false', () => {
    
  })

})
