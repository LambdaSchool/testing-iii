// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display'

test('should match snapshot', () => {
    expect(render(<Display/>)).toMatchSnapshot();
  });

test('App renders without crashing', () => {
    render(<Display/>);
  });

  test('contains buttom Close Gate', () => {
    // Arrange
    const { getByText } = render(<Display />);
    // Act - getting the node by text
    getByText(/Unlocked/i);
    getByText(/Open/i);
    // Assertion is if ^^^ is truthy
  });


  