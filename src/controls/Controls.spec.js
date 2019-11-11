import React from 'react';
import {render} from '@testing-library/react';

import Controls from './Controls';

// Test away!

test('control render correct' , () => {
    expect(render(<Controls/>)).toMatchSnapshot();
});


test('renders "success" text', () => {
    const { getByText, findByText } = render(<App />);
    // Click button
    fireEvent.click(getByText("Get message!"));
    findByText(/Unlock Gate/i);   
});