// Test away!
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Controls from './Controls'

test('Controls render', () => {
    render(<Controls />)
})

test('Unlocked and Open: Lock Gate button is disabled', () => {
    const container = render(<Controls locked={false} closed={false} />)
    const lockButton = container.getByText(/Lock Gate/i)
    expect(lockButton.getAttribute('disabled')).not.toBeNull()
})

test('Unlocked and Open: Close Gate button is enabled', () => {
    const container = render(<Controls locked={false} closed={false} />)
    const closeButton = container.getByText(/Close Gate/i)
    expect(closeButton.getAttribute('disabled')).toBeNull()
})

test('Unlocked and Closed: Lock Gate button is enabled', () => {
    const container = render(<Controls locked={false} closed={true} />)
    const lockButton = container.getByText(/Lock Gate/i)
    expect(lockButton.getAttribute('disabled')).toBeNull()
})

test('Unlocked and Closed: Open Gate button is enabled', () => {
    const container = render(<Controls locked={false} closed={true} />)
    const closeButton = container.getByText(/Open Gate/i)
    expect(closeButton.getAttribute('disabled')).toBeNull()
})

test('Locked and Closed: Unlock Gate button is enabled', () => {
    const container = render(<Controls locked={true} closed={true} />)
    const lockButton = container.getByText(/Unlock Gate/i)
    expect(lockButton.getAttribute('disabled')).toBeNull()
})

test('Locked and Closed: Open Gate button is disabled', () => {
    const container = render(<Controls locked={true} closed={true} />)
    const closeButton = container.getByText(/Open Gate/i)
    expect(closeButton.getAttribute('disabled')).not.toBeNull()
})