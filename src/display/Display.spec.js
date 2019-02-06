// Test away!
import React from 'react';
import {render, clickEvent} from 'react-testing-library';
import Display from './Display';

describe('Tests for Display Component', () => {
      test('It should display the display component', () => {
            const {getByText, getByTestId} = render(<Display />);
              
      });

});