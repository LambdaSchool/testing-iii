// Test away
import React from 'react';
import Dashboard from './Dashboard'
//snapshot testing
import { render, fireEvent } from "@testing-library/react";


test('it renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot()
})

test('default Unlocke and open', () => {
    const  {getByText} = render(<Dashboard/>)
    getByText('Unlocked')
    getByText('Open')
})

test('toogle button from close to open', () => {
    const {getByText} = render(<Dashboard/>)
    const toggleBtn = getByText(/close gate/i)
    //click button
    fireEvent.click(toggleBtn)
    getByText(/open gate/i)

    
    const toggleBtnC = getByText(/open gate/i)
    //click button
    fireEvent.click(toggleBtnC)
    getByText(/close gate/i)
})

test('toggle lock to unlock', () => {
    const {getByText} = render(<Dashboard/>)
    const closeBtn = getByText(/close gate/i)
    //click button
    fireEvent.click(closeBtn)

    
    const lockBtn = getByText(/lock gate/i)
    //click button
    fireEvent.click(lockBtn)
    getByText(/unlock gate/i)
})