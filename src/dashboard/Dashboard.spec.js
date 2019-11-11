import React from 'react';
import {render} from '@testing-library/react';

import Dashboard from './Dashboard';


// Test away

test('control render correct' , () => {
    expect(render(<Dashboard/>)).toMatchSnapshot();
});



// it('renders "success" text', () => {
//     const { getByText, findByText } = render(<App />);
//     // Click button
//     fireEvent.click(getByText("Get message!"));
//     findByText(/success/i);
// });