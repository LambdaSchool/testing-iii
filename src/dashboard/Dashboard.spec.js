// Test away
import React from 'react'
import { render } from '@testing-library/react'

import Dashboard from './Dashboard'

test('Dashboard renders correctly, and defaults gate to Unlocked and Open', () => {
    expect(render(<Dashboard />)).toMatchSnapshot()
})