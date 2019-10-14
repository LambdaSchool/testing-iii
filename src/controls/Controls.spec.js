// Test away!
import React from 'react';
import Controls from './Controls'
//snapshot testing
import { render, fireEvent } from "@testing-library/react";

//snapshot
test('it renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
})

test('toggle lock and on-lock working, () => {
    const 
}')