// Test away!
import React from 'react';
import Display from './Display'
//snapshot testing
import { render, fireEvent } from "@testing-library/react";


test('it renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot()
})

test('diplay close to open', () => {
    const lockedMock = jest.fn()
    const {getByText} = render(
    <Display locked={lockedMock}/>)
    const toggleBtn = getByText(/locked/i)
    //click button
    fireEvent.click(toggleBtn)
    getByText(/locked/i)
})

