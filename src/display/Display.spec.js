// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

test('renders without crashing', () => {
    const wrapper = rtl.render(<Display />);
    const element = wrapper.getByText('/gate/i');
    expect(element).toBeVisible();
})