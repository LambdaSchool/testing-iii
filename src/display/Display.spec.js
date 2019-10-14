// Test away!
import React from 'react';
import Display from './Display'
//snapshot testing
import { render, fireEvent } from "@testing-library/react";


test('it renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot()
})