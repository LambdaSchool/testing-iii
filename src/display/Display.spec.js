// Test away!
import React from 'react'
import { render } from '@testing-library/react'

import Display from './Display'

test('Display renders', () => {
    render(<Display />)
})

test('Unlocked: displays Unlocked with class "green-led"', () => {
    const container = render(<Display locked={false} />)
    const unlocked = container.getByText(/Unlocked/i)
    expect(/green-led/.test(unlocked.className)).toBe(true)
    expect(/red-led/.test(unlocked.className)).toBe(false)
})

test('Locked: displays Locked with class "red-led"', () => {
    const container = render(<Display locked={true} />)
    const locked = container.getByText(/Locked/i)
    expect(/green-led/.test(locked.className)).toBe(false)
    expect(/red-led/.test(locked.className)).toBe(true)
})

test('Open: displays Open with class "green-led"', () => {
    const container = render(<Display closed={false} />)
    const open = container.getByText(/Open/i)
    expect(/green-led/.test(open.className)).toBe(true)
    expect(/red-led/.test(open.className)).toBe(false)
})

test('Closed: displays Closed with class "red-led"', () => {
    const container = render(<Display closed={true} />)
    const closed = container.getByText(/Closed/i)
    expect(/green-led/.test(closed.className)).toBe(false)
    expect(/red-led/.test(closed.className)).toBe(true)
})